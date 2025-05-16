import React, { useState } from "react";
import { Input } from "../JeCherche/input";
import { Button } from "@/components/ui/button";

const fileTypes = ["document","pdf", "texte", "code"];

function FileModal({ onConfirm, onClose, isFolder }: { onConfirm: (name: string, type: string) => void; onClose: () => void; isFolder: boolean }) {
  const [name, setName] = useState("");
  const [type, setType] = useState(fileTypes[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[300px] space-y-4">
        <h2 className="text-lg font-bold text-center">{isFolder ? "Nouveau dossier" : "Nouveau fichier"}</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isFolder ? "Nom du dossier" : "Nom du fichier"}
        />
        {!isFolder && (
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded-xl"
          >
            {fileTypes.map((ft) => (
              <option key={ft} value={ft}>{ft}</option>
            ))}
          </select>
        )}
        <div className="flex gap-2 justify-end">
          <Button onClick={onClose} className="bg-gray-300">Annuler</Button>
          <Button onClick={() => onConfirm(name.trim(), isFolder ? "folder" : type)} className="bg-green-500 text-white">Créer</Button>
        </div>
      </div>
    </div>
  );
}

export default FileModal;
