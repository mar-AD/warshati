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


function moveFile(files: FileItem[], dragPath: number[], dropPath: number[]): FileItem[] {
  if (JSON.stringify(dragPath) === JSON.stringify(dropPath)) return files;

  const draggedItem = findItemByPath(files, dragPath);
  if (!draggedItem) return files;

  // Remove dragged item first
  let cloned = JSON.parse(JSON.stringify(files));
  cloned = removeItemByPath(cloned, dragPath);

  // Now we need to re-find the drop folder path in the new cloned array (indexes may have shifted)
  const dropFolder = findItemByPath(cloned, dropPath);
  if (!dropFolder) {
    console.error("Drop folder not found (path may be invalid after removal)");
    return files; // or return cloned if you want to keep removal
  }
  if (!dropFolder.isFolder) {
    console.error("Drop target is not a folder");
    return files;
  }
  if (!dropFolder.children) dropFolder.children = [];

  // Add dragged item to drop folder's children
  dropFolder.children.push(draggedItem);

  return cloned;
}

// Helper: Find item by path recursively
function findItemByPath(items: FileItem[], path: number[]): FileItem | null {
  let current: FileItem | null = null;
  let list = items;
  for (let i = 0; i < path.length; i++) {
    current = list[path[i]];
    if (!current) return null;
    if (i < path.length - 1) {
      if (!current.children) return null;
      list = current.children;
    }
  }
  return current;
}

// Helper: Remove item by path recursively
function removeItemByPath(items: FileItem[], path: number[]): FileItem[] {
  if (path.length === 0) return items;

  const indexToRemove = path[0];
  if (path.length === 1) {
    return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
  }

  const updated = [...items];
  const child = updated[indexToRemove];
  if (child.children) {
    child.children = removeItemByPath(child.children, path.slice(1));
  }
  updated[indexToRemove] = child;
  return updated;
}



function FileExplorer({ files, onAddFileToFolder, onDrop, onTag, onDelete, onShare, path = [] }: any) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="ml-4">
      {files.map((file: FileItem, index: number) => {
        const currentPath = [...path, index];
        const key = currentPath.join("-");
        const isExpanded = expanded[key] || false;

        return (
          <div
            key={key}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add("bg-blue-50");
            }}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove("bg-blue-50");
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("bg-blue-50");
              const dragPath = JSON.parse(e.dataTransfer.getData("path"));
              onDrop(dragPath, currentPath);
            }}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("path", JSON.stringify(currentPath));
              e.currentTarget.classList.add("opacity-50");
            }}
            onDragEnd={(e) => {
              e.currentTarget.classList.remove("opacity-50");
            }}
            className="border rounded-xl p-4 bg-white shadow hover:bg-yellow-50 transition-all mb-2"
          >
            {file.isFolder ? (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggle(key)} className="mr-2">
                      {isExpanded ? "📂" : "📁"}
                    </button>
                    <span className="font-bold">{file.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onAddFileToFolder(currentPath, prompt("Nom du fichier ?") || "")}
                      className="bg-green-500 text-white px-3 py-1 rounded-xl text-sm"
                    >
                      + Nouveau fichier
                    </button>
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
                {isExpanded && file.children && file.children.length > 0 && (
                  <FileExplorer
                    files={file.children}
                    onAddFileToFolder={onAddFileToFolder}
                    onDrop={onDrop}
                    onTag={onTag}
                    onDelete={onDelete}
                    onShare={onShare}
                    path={currentPath}
                  />
                )}
              </>
            ) : (
              <div className="flex justify-between items-center ml-6">
                <span>📄 {file.name}</span>
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

  // Add this function inside JeManipule (below deleteFile or wherever)
const addFileToFolder = (path: number[], name: string) => {
  const newFile: FileItem = {
    name,
    type: "txt",
    tags: [],
    date: new Date().toLocaleDateString(),
    isFolder: false,
    children: [],
  };

  setFiles((prev) => {
    const cloned = JSON.parse(JSON.stringify(prev));
    let current = cloned;

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]].children;
    }

    current[path[path.length - 1]].children.push(newFile);
    return cloned;
  });
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
  onAddFileToFolder={addFileToFolder}
/>

    </main>
  );
}