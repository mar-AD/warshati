"use client";

import { useRef, useState } from "react";
import { Input } from "../JeCherche/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileModal from "./FileModal";
import { MoreVertical } from "lucide-react";
import { Dropdown } from "./DropDown";

interface FileItem {
  id: string;
  name: string;
  type: string;
  tags: string[];
  date: string;
  isFolder: boolean;
  children: FileItem[];
  content?: string;
}

const AddFileModal = ({ 
  isOpen, 
  onClose, 
  onConfirm 
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
}) => {
  const [fileName, setFileName] = useState("");

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold">Add New File</h2>
        <Input 
          placeholder="File name" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)} 
        />
        <div className="flex justify-end gap-2">
          <Button onClick={() => {
            onConfirm(fileName);
            setFileName("");
            onClose();
          }}>Add</Button>
          <Button variant="outline" onClick={() => {
            setFileName("");
            onClose();
          }}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

const AddTagModal = ({ 
  isOpen, 
  onClose, 
  onConfirm 
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (tag: string) => void;
}) => {
  const [tag, setTag] = useState("");

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold">Add Tag</h2>
        <Input 
          placeholder="Tag name" 
          value={tag} 
          onChange={(e) => setTag(e.target.value)} 
        />
        <div className="flex justify-end gap-2">
          <Button onClick={() => {
            onConfirm(tag);
            setTag("");
            onClose();
          }}>Add</Button>
          <Button variant="outline" onClick={() => {
            setTag("");
            onClose();
          }}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

function findItemByIdPath(items: FileItem[], path: string[]): FileItem | null {
  let current: FileItem | null = null;
  let list = items;
  for (const id of path) {
    current = list.find(item => item.id === id) || null;
    if (!current) return null;
    list = current.children;
  }
  return current;
}

function removeItemByIdPath(items: FileItem[], path: string[]): FileItem[] {
  if (path.length === 0) return items;
  const cloned = structuredClone(items);
  let parent = cloned;
  for (let i = 0; i < path.length - 1; i++) {
    const found = parent.find(item => item.id === path[i]);
    if (!found) return items;
    parent = found.children;
  }
  const targetId = path[path.length - 1];
  const idx = parent.findIndex(item => item.id === targetId);
  if (idx !== -1) parent.splice(idx, 1);
  return cloned;
}

function moveFileByIdPath(files: FileItem[], dragPath: string[], dropPath: string[]): FileItem[] {
  if (JSON.stringify(dragPath) === JSON.stringify(dropPath)) return files;
  if (dropPath.length > 0 && dragPath.length > 0) {
    const dropPathStr = JSON.stringify(dropPath);
    const dragPathStr = JSON.stringify(dragPath.slice(0, dropPath.length));
    if (dropPathStr === dragPathStr) return files;
  }
  const dragged = findItemByIdPath(files, dragPath);
  if (!dragged) return files;
  const cloned = removeItemByIdPath(files, dragPath);
  if (dropPath.length === 0) return [...cloned, dragged];
  const dropTarget = findItemByIdPath(cloned, dropPath);
  if (!dropTarget || !dropTarget.isFolder) return [...cloned, dragged];
  dropTarget.children.push(dragged);
  return cloned;
}

function FileExplorer({ files, onAddFileToFolder, onDrop, onTag, onDelete, onShare, path = [], setSelectedPath, setEditingText }: any) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = (key: string, fileId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDragOver = (e: React.DragEvent, id: string | null = null) => {
    e.preventDefault();
    if (id === null) {
      setDragOverId(null);
    } else {
      setDragOverId(id);
    }
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDragEnd = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent, dropPath: string[]) => {
    e.preventDefault();
    handleDragEnd();
    const dragPath = JSON.parse(e.dataTransfer.getData("path"));
    onDrop(dragPath, dropPath);
  };

  const handleFileClick = (currentPath: string[], file: FileItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPath(currentPath);
    setEditingText(file.content || "");
  };

  return (
    <div 
      ref={containerRef}
      className="ml-4 relative h-full"
      onDragOver={(e) => handleDragOver(e, null)}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, [])}
    >
      <AddFileModal
        isOpen={showAddFileModal}
        onClose={() => setShowAddFileModal(false)}
        onConfirm={(name) => {
          onAddFileToFolder(currentPath, name);
        }}
      />

      <AddTagModal
        isOpen={showTagModal}
        onClose={() => setShowTagModal(false)}
        onConfirm={(tag) => {
          onTag(currentPath, tag);
        }}
      />

      <div className="space-y-2">
        {files.map((file: FileItem) => {
          const currentPath = [...path, file.id];
          const key = currentPath.join("-");
          const isExpanded = expanded[key] || false;
          
          return (
            <div
              key={file.id}
              onDragOver={(e) => handleDragOver(e, file.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, currentPath)}
              className={`border rounded-lg p-2 bg-white shadow-sm hover:bg-gray-50 transition-all ${
                dragOverId === file.id ? "bg-blue-50 border-blue-300" : "border-gray-200"
              }`}
              draggable
              onDragStart={(e) => {
                e.stopPropagation();
                e.dataTransfer.setData("path", JSON.stringify(currentPath));
                e.currentTarget.classList.add("opacity-50");
              }}
              onDragEnd={(e) => {
                e.stopPropagation();
                handleDragEnd();
                e.currentTarget.classList.remove("opacity-50");
              }}
            >
              {file.isFolder ? (
                <>
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={(e) => toggle(key, file.id, e)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{isExpanded ? "📂" : "📁"}</span>
                      <span className="font-medium">{file.name}</span>
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Dropdown
                        trigger={<button className="p-1 hover:bg-gray-100 rounded-full"><MoreVertical className="h-4 w-4" /></button>}
                        items={[
                          { 
                            label: "+ New file", 
                            onClick: () => {
                              setCurrentPath(currentPath);
                              setShowAddFileModal(true);
                            } 
                          },
                          { 
                            label: "Add tag", 
                            onClick: () => {
                              setCurrentPath(currentPath);
                              setShowTagModal(true);
                            } 
                          },
                          { label: "Delete", onClick: () => onDelete(currentPath), danger: true },
                          { label: "Share", onClick: () => onShare(file) },
                        ]}
                      />
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="mt-2 pl-4 border-l-2 border-gray-200">
                      <FileExplorer
                        files={file.children}
                        onAddFileToFolder={onAddFileToFolder}
                        onDrop={onDrop}
                        onTag={onTag}
                        onDelete={onDelete}
                        onShare={onShare}
                        path={currentPath}
                        setSelectedPath={setSelectedPath}
                        setEditingText={setEditingText}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={(e) => handleFileClick(currentPath, file, e)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>{file.name}</span>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <Dropdown
                      trigger={<button className="p-1 hover:bg-gray-100 rounded-full"><MoreVertical className="h-4 w-4" /></button>}
                      items={[
                        { 
                          label: "Add tag", 
                          onClick: () => {
                            setCurrentPath(currentPath);
                            setShowTagModal(true);
                          } 
                        },
                        { label: "Delete", onClick: () => onDelete(currentPath), danger: true },
                        { label: "Share", onClick: () => onShare(file) },
                      ]}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
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
  const [selectedPath, setSelectedPath] = useState<string[] | null>(null);
  const [editingText, setEditingText] = useState("");

  const createItem = (name: string, type: string) => {
    const newItem: FileItem = {
      id: uuidv4(),
      name,
      type,
      tags: [],
      date: new Date().toLocaleDateString(),
      isFolder: modalFolder,
      children: [],
      content: "",
    };
    setFiles((prev) => [...prev, newItem]);
    setShowModal(false);
  };

  const addFileToFolder = (path: string[], name: string) => {
    const newFile: FileItem = {
      id: uuidv4(),
      name,
      type: "txt",
      tags: [],
      date: new Date().toLocaleDateString(),
      isFolder: false,
      children: [],
      content: "",
    };
    setFiles((prev) => {
      const cloned = structuredClone(prev);
      const parent = findItemByIdPath(cloned, path);
      if (parent?.children) parent.children.push(newFile);
      return cloned;
    });
  };

  const tagFile = (path: string[], tag: string) => {
    if (!tag) return;
    setFiles((prev) => {
      const cloned = structuredClone(prev);
      const file = findItemByIdPath(cloned, path);
      if (file) file.tags.push(tag);
      return cloned;
    });
  };

  const deleteFile = (path: string[]) => {
    setFiles((prev) => removeItemByIdPath(prev, path));
  };

  const shareFile = (file: FileItem) => alert(`Partagé: ${file.name}`);

  const handleDrop = (dragPath: string[], dropPath: string[]) => {
    setFiles((prev) => moveFileByIdPath(prev, dragPath, dropPath));
  };

  const filtered = files.filter((f) =>
    (!filterType || f.type === filterType) &&
    (!filterTag || f.tags.includes(filterTag)) &&
    (!filterDate || f.date === filterDate.toLocaleDateString())
  );

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6 h-full">
      <h1 className="text-3xl font-bold text-center">Je manipule la DATA</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Filtrer par type..." value={filterType} onChange={(e) => setFilterType(e.target.value)} />
        <Input placeholder="Filtrer par tag..." value={filterTag} onChange={(e) => setFilterTag(e.target.value)} />
        <DatePicker selected={filterDate} onChange={(date) => setFilterDate(date)} placeholderText="Filtrer par date..." className="w-full px-4 py-2 rounded-xl border border-gray-300" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => { setModalFolder(false); setShowModal(true); }} className="bg-green-500 text-white w-full">Ajouter un fichier</Button>
        <Button onClick={() => { setModalFolder(true); setShowModal(true); }} className="bg-yellow-500 text-white w-full">Ajouter un dossier</Button>
      </div>
      {showModal && <FileModal onConfirm={createItem} onClose={() => setShowModal(false)} isFolder={modalFolder} />}
      {selectedPath && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-lg space-y-4">
            <h2 className="text-xl font-semibold">Edit File</h2>
            <textarea
              className="w-full border p-2 rounded"
              rows={10}
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button onClick={() => {
                setFiles(prev => {
                  const cloned = structuredClone(prev);
                  const file = findItemByIdPath(cloned, selectedPath);
                  if (file) file.content = editingText;
                  return cloned;
                });
                setSelectedPath(null);
              }}>Save</Button>
              <Button variant="outline" onClick={() => setSelectedPath(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
      <FileExplorer
        files={filtered}
        onDrop={handleDrop}
        onTag={tagFile}
        onDelete={deleteFile}
        onShare={shareFile}
        onAddFileToFolder={addFileToFolder}
        setSelectedPath={setSelectedPath}
        setEditingText={setEditingText}
      />
    </main>
  );
}