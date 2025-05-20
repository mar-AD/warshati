// import React, { useState } from "react";
// import { Input } from "../JeCherche/input";
// import { Button } from "@/components/ui/button";

// function FileModal({ onConfirm, onClose, isFolder }: { 
//   onConfirm: (name: string, type: string) => void; 
//   onClose: () => void; 
//   isFolder: boolean 
// }) {
//   const [name, setName] = useState("");

//   const handleConfirm = () => {
//     const finalName = isFolder ? name.trim() : `${name.trim()}.txt`;
//     onConfirm(finalName, isFolder ? "folder" : "txt");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
//       <div className="bg-white rounded-xl p-6 w-[300px] space-y-4">
//         <h2 className="text-lg font-bold text-center">
//           {isFolder ? "Nouveau dossier" : "Nouveau fichier"}
//         </h2>
        
//         <Input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder={isFolder ? "Nom du dossier" : "Nom du fichier (sans .txt)"}
//         />
        
//         <div className="flex gap-2 justify-end">
//           <Button onClick={onClose} className="bg-gray-300">
//             Annuler
//           </Button>
//           <Button 
//             onClick={handleConfirm} 
//             className="bg-green-500 text-white"
//           >
//             Créer
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FileModal;

// FileModal.tsx
import { useState } from "react";
import { Input } from "../JeCherche/input";
import { Button } from "@/components/ui/button";

interface FileModalProps {
  onConfirm: (name: string, type: string) => void;
  onClose: () => void;
  isFolder: boolean;
  existingNames: string[]; // Array of existing names to check against
}

function FileModal({ onConfirm, onClose, isFolder, existingNames }: FileModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    const trimmedName = name.trim();
    
    // Validate empty name
    if (!trimmedName) {
      setError("Name cannot be empty");
      return;
    }

    // Check for duplicate names
    const finalName = isFolder ? trimmedName : `${trimmedName}.txt`;
    if (existingNames.includes(finalName)) {
      setError(`${isFolder ? "Folder" : "File"} with this name already exists`);
      return;
    }

    onConfirm(finalName, isFolder ? "folder" : "txt");
    setName("");
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 !mt-0">
      <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center">
          {isFolder ? "New Folder" : "New File"}
        </h2>
        
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          placeholder={isFolder ? "Folder name" : "File name (without extension)"}
          className={error ? "border-red-500" : ""}
          onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
        />
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <div className="flex gap-2 justify-end">
          <Button 
            variant="outline" 
            onClick={() => {
              setName("");
              setError("");
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm}
            className="bg-green-600 hover:bg-green-700 text-white"
            disabled={!name.trim()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FileModal;