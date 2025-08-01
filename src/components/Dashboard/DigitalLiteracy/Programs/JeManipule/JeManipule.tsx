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
import { FileItem } from "@/lib/types";
import { AddTagModal } from "./AddTagModal";
import { findItemByIdPath, moveFileByIdPath, removeItemByIdPath } from "./Utilts";
import { ShareModal } from "./ShareModal";


function FileExplorer({ files, onAddFileToFolder, onDrop, onTag, onDelete, onShare, path = [], setSelectedPath, setEditingText }: any) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentFolder = findItemByIdPath(files, currentPath);
  const existingNames = currentFolder?.children?.map(f => f.name) || [];

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
      {showAddFileModal && (
        <FileModal
          onConfirm={(name) => {
            onAddFileToFolder(currentPath, name);
            setShowAddFileModal(false);
          }}
          onClose={() => setShowAddFileModal(false)}
          isFolder={false}
          existingNames={existingNames}
        />
      )}

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
  const [filterName, setFilterName] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalFolder, setModalFolder] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string[] | null>(null);
  const [editingText, setEditingText] = useState("");
  const [shareModalData, setShareModalData] = useState<{
    isOpen: boolean;
    file: FileItem | null;
  }>({
    isOpen: false,
    file: null,
  });

  const rootNames = files.map(f => f.name);

  const filterFiles = (fileList: FileItem[], nameFilter: string, tagFilter: string, dateFilter: Date | null): FileItem[] => {
    return fileList.reduce<FileItem[]>((acc, file) => {
      const matchesName = !nameFilter || file.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesTag = !tagFilter || file.tags.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase()));
      const matchesDate = !dateFilter || file.date === dateFilter.toLocaleDateString();
      
      const matchesFilters = matchesName && matchesTag && matchesDate;
      
      if (file.isFolder) {
        // If folder matches, include it with all its contents
        if (matchesFilters) {
          acc.push({
            ...file,
            children: filterFiles(file.children, '', '', null) // Show all children when folder matches
          });
        } else {
          // Otherwise check children (but don't include the folder itself)
          const filteredChildren = filterFiles(file.children, nameFilter, tagFilter, dateFilter);
          acc.push(...filteredChildren);
        }
      } else if (matchesFilters) {
        acc.push(file);
      }
      
      return acc;
    }, []);
  };

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

  const shareFile = (file: FileItem) => {
    setShareModalData({
      isOpen: true,
      file
    });
  };

  const handleDrop = (dragPath: string[], dropPath: string[]) => {
    setFiles((prev) => moveFileByIdPath(prev, dragPath, dropPath));
  };

  const filtered = filterFiles(files, filterName, filterTag, filterDate);

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6 h-full">
      <h1 className="text-3xl font-bold text-center">Je manipule la DATA</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input 
          placeholder="Search by name..." 
          value={filterName} 
          onChange={(e) => setFilterName(e.target.value)} 
        />
        <Input 
          placeholder="Search by tag..." 
          value={filterTag} 
          onChange={(e) => setFilterTag(e.target.value)} 
        />
        <DatePicker 
          selected={filterDate} 
          onChange={(date) => setFilterDate(date)} 
          placeholderText="Filter by date..." 
          className="w-full px-4 py-2 rounded-xl border border-gray-300" 
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          onClick={() => { setModalFolder(false); setShowModal(true); }} 
          className="bg-green-500 text-white w-full"
        >
          Add File
        </Button>
        <Button 
          onClick={() => { setModalFolder(true); setShowModal(true); }} 
          className="bg-yellow-500 text-white w-full"
        >
          Add Folder
        </Button>
      </div>
      
      {showModal && (
        <FileModal
          onConfirm={createItem}
          onClose={() => setShowModal(false)}
          isFolder={modalFolder}
          existingNames={rootNames}
        />
      )}
      
      {selectedPath && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 !mt-0">
          <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-lg space-y-4 ">
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
              }}>
                Save
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSelectedPath(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <ShareModal
        isOpen={shareModalData.isOpen}
        onClose={() => setShareModalData({ isOpen: false, file: null })}
        file={shareModalData.file!}
      />
      
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