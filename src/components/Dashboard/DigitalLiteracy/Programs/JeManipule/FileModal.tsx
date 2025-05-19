import React, { useState } from "react";
import { Input } from "../JeCherche/input";
import { Button } from "@/components/ui/button";

function FileModal({ onConfirm, onClose, isFolder }: { 
  onConfirm: (name: string, type: string) => void; 
  onClose: () => void; 
  isFolder: boolean 
}) {
  const [name, setName] = useState("");

  const handleConfirm = () => {
    const finalName = isFolder ? name.trim() : `${name.trim()}.txt`;
    onConfirm(finalName, isFolder ? "folder" : "txt");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[300px] space-y-4">
        <h2 className="text-lg font-bold text-center">
          {isFolder ? "Nouveau dossier" : "Nouveau fichier"}
        </h2>
        
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isFolder ? "Nom du dossier" : "Nom du fichier (sans .txt)"}
        />
        
        <div className="flex gap-2 justify-end">
          <Button onClick={onClose} className="bg-gray-300">
            Annuler
          </Button>
          <Button 
            onClick={handleConfirm} 
            className="bg-green-500 text-white"
          >
            Créer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FileModal;