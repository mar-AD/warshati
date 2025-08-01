
import { Button } from "@/components/ui/button";
import { AddTagModalProps } from "@/lib/types";
import { useState } from "react";
import { Input } from "../JeCherche/input";

export const AddTagModal = ({ 
  isOpen, 
  onClose, 
  onConfirm 
}: AddTagModalProps) => {
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