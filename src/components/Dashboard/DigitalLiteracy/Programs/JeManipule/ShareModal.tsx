import { useState } from "react";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { FileItem, ShareModalProps } from "@/lib/types";
import { Input } from "../JeCherche/input";

export const ShareModal = ({
  isOpen,
  onClose,
  file
}: ShareModalProps) => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !file) return null;

  const fileItemToZip = async (file: FileItem): Promise<File> => {
    const zip = new JSZip();
    const addToZip = (item: FileItem, folder: JSZip) => {
      if (item.isFolder) {
        const subFolder = folder.folder(item.name);
        item.children.forEach(child => addToZip(child, subFolder!));
      } else {
        folder.file(item.name.endsWith(".txt") ? item.name : `${item.name}.txt`, item.content || "");
      }
    };
    addToZip(file, zip);
    const blob = await zip.generateAsync({ type: "blob" });
    return new File([blob], `${file.name}.zip`, { type: "application/zip" });
  };

  const prepareFileForSharing = async (): Promise<File | null> => {
    if (!file) return null;
    return file.isFolder
      ? await fileItemToZip(file)
      : new File(
          [file.content || ''],
          file.name.endsWith('.txt') ? file.name : `${file.name}.txt`,
          { type: 'text/plain' }
        );
  };

  const uploadToServer = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    try {
        //api needed here======
      const res = await fetch("...", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      return data.link || null;
    } catch (err) {
      console.error("Upload failed", err);
      return null;
    }
  };

  const shareViaWhatsApp = async () => {
    const fileToShare = await prepareFileForSharing();
    if (!fileToShare) return;
    const url = await uploadToServer(fileToShare);
    if (!url) return;
    const message = `Here is the ${file.isFolder ? "folder" : "file"}: ${file.name}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
  };

  const shareViaGmail = async () => {
    const fileToShare = await prepareFileForSharing();
    if (!fileToShare || !email) return;
    const url = await uploadToServer(fileToShare);
    if (!url) return;
    const subject = `Sharing ${file.isFolder ? 'Folder' : 'File'}: ${file.name}`;
    const body = `Here is the ${file.isFolder ? 'folder' : 'file'}: ${file.name}\n${url}`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const copyShareableLink = async () => {
    const dummyLink = `https://.../share/${file?.id}`;
    try {
      await navigator.clipboard.writeText(dummyLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50`}>
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold">
          Share {file.isFolder ? 'Folder' : 'File'}: {file.name}
        </h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={shareViaWhatsApp} className="flex-1 bg-green-600 text-white">
              WhatsApp
            </Button>
            <Button onClick={copyShareableLink} className="flex-1 bg-gray-800 text-white">
              {copied ? 'Copied!' : 'Copy Link'}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={shareViaGmail} disabled={!email} className="bg-red-600 text-white">
              Gmail
            </Button>
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};