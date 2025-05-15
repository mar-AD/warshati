"use client";

import { useState } from "react";
import { Input } from "../JeCherche/input";
import { Button } from "@/components/ui/button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileModal from "./FileModal";

interface FileItem {
  name: string;
  type: string;
  tags: string[];
  date: string;
  isFolder: boolean;
  children: FileItem[];
}

function findItemByPath(files: FileItem[], path: number[]): FileItem | null {
  let current = files;
  let item = null;
  
  for (const index of path) {
    if (index < 0 || index >= current.length) return null;
    item = current[index];
    if (item.isFolder) {
      current = item.children;
    } else {
      current = [];
    }
  }
  
  return item;
}

function removeItemByPath(files: FileItem[], path: number[]): FileItem[] {
  const cloned = JSON.parse(JSON.stringify(files));
  
  if (path.length === 1) {
    cloned.splice(path[0], 1);
    return cloned;
  }
  
  let current = cloned;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]].children;
  }
  
  current.splice(path[path.length - 1], 1);
  return cloned;
}

function moveFile(files: FileItem[], dragPath: number[], dropPath: number[]): FileItem[] {
  // Don't allow dropping on itself
  if (JSON.stringify(dragPath) === JSON.stringify(dropPath)) {
    return files;
  }
  
  // Don't allow dropping into a non-folder (unless it's a root level drop)
  const dropItem = findItemByPath(files, dropPath);
  if (dropPath.length > 0 && (!dropItem || !dropItem.isFolder)) {
    return files;
  }
  
  // Get the dragged item
  const draggedItem = findItemByPath(files, dragPath);
  if (!draggedItem) return files;
  
  // Remove from old location
  const withoutDragged = removeItemByPath(files, dragPath);
  
  // Add to new location
  const cloned = JSON.parse(JSON.stringify(withoutDragged));
  
  // If dropping at root level
  if (dropPath.length === 0) {
    return [...cloned, draggedItem];
  }
  
  let current = cloned;
  for (let i = 0; i < dropPath.length; i++) {
    current = current[dropPath[i]].children;
  }
  
  current.push(draggedItem);
  return cloned;
}

function FileExplorer({ files, onDrop, onTag, onDelete, onShare, path = [] }: any) {
  return (
    <div className="space-y-4">
      {files.map((file: any, index: number) => {
        const currentPath = [...path, index];
        return (
          <div
            key={index}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add('bg-blue-50');
            }}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove('bg-blue-50');
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove('bg-blue-50');
              const dragPath = JSON.parse(e.dataTransfer.getData("path"));
              onDrop(dragPath, currentPath);
            }}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("path", JSON.stringify(currentPath));
              e.currentTarget.classList.add('opacity-50');
            }}
            onDragEnd={(e) => {
              e.currentTarget.classList.remove('opacity-50');
            }}
            className="border rounded-xl p-4 bg-white shadow hover:bg-yellow-50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">
                  {file.isFolder ? "📁" : "📄"} {file.name}
                </h2>
                <p className="text-sm text-gray-500">{file.type} | {file.date}</p>
                <p className="text-sm">Tags: {file.tags.join(", ") || "Aucun"}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => onTag(currentPath)} 
                  className="bg-purple-500 text-white px-3 py-1 rounded-xl"
                >
                  Taguer
                </button>
                <button 
                  onClick={() => onDelete(currentPath)} 
                  className="bg-red-500 text-white px-3 py-1 rounded-xl"
                >
                  Supprimer
                </button>
                <button 
                  onClick={() => onShare(file)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-xl"
                >
                  Partager
                </button>
              </div>
            </div>
            {file.isFolder && file.children.length > 0 && (
              <div className="ml-6 mt-2">
                <FileExplorer
                  files={file.children}
                  onDrop={onDrop}
                  onTag={onTag}
                  onDelete={onDelete}
                  onShare={onShare}
                  path={currentPath}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function JeManipule() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [filterType, setFilterType] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalFolder, setModalFolder] = useState(false);

  const createItem = (name: string, type: string) => {
    const newItem: FileItem = {
      name,
      type,
      tags: [],
      date: new Date().toLocaleDateString(),
      isFolder: modalFolder,
      children: [],
    };
    setFiles((prev) => [...prev, newItem]);
    setShowModal(false);
  };

  const tagFile = (path: number[]) => {
    const tag = prompt("Ajouter un tag?");
    if (!tag) return;
    setFiles((prev) => {
      const cloned = JSON.parse(JSON.stringify(prev));
      let ref = cloned;
      for (let i = 0; i < path.length - 1; i++) {
        ref = ref[path[i]].children;
      }
      ref[path[path.length - 1]].tags.push(tag);
      return cloned;
    });
  };

  const deleteFile = (path: number[]) => {
    setFiles((prev) => removeItemByPath(prev, path));
  };

  const shareFile = (file: FileItem) => {
    alert(`Partagé: ${file.name}`);
  };

  const handleDrop = (dragPath: number[], dropPath: number[]) => {
    setFiles((prev) => moveFile(prev, dragPath, dropPath));
  };

  const filtered = files.filter((f) =>
    (!filterType || f.type === filterType) &&
    (!filterTag || f.tags.includes(filterTag)) &&
    (!filterDate || f.date === filterDate.toLocaleDateString())
  );

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Je manipule la DATA</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input 
          placeholder="Filtrer par type..." 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)} 
        />
        <Input 
          placeholder="Filtrer par tag..." 
          value={filterTag} 
          onChange={(e) => setFilterTag(e.target.value)} 
        />
        <DatePicker
          selected={filterDate}
          onChange={(date) => setFilterDate(date)}
          placeholderText="Filtrer par date..."
          className="w-full px-4 py-2 rounded-xl border border-gray-300"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          onClick={() => { setModalFolder(false); setShowModal(true); }} 
          className="bg-green-500 text-white w-full"
        >
          Ajouter un fichier
        </Button>
        <Button 
          onClick={() => { setModalFolder(true); setShowModal(true); }} 
          className="bg-yellow-500 text-white w-full"
        >
          Ajouter un dossier
        </Button>
      </div>

      {showModal && (
        <FileModal
          onConfirm={createItem}
          onClose={() => setShowModal(false)}
          isFolder={modalFolder}
        />
      )}
      <FileExplorer
        files={filtered}
        onDrop={handleDrop}
        onTag={tagFile}
        onDelete={deleteFile}
        onShare={shareFile}
      />
    </main>
  );
}