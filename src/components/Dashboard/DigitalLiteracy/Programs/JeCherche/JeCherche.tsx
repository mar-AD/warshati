"use client";

import { useState } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./textArea";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export default function JeCherche() {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("internet");
  const [notes, setNotes] = useState("");

  const handleSearch = () => {
    if (source === "internet") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchUrl, "_blank");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([notes], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my_notes.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center ">Je cherche une information</h1>

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tape ici ce que tu veux chercher..."
        className="text-lg"
      />

      <RadioGroup value={source} onValueChange={setSource} className="flex gap-4 justify-center">
        <RadioGroupItem value="internet" label="Internet" />
        <RadioGroupItem value="local" label="Local" />
      </RadioGroup>

      <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={handleSearch}>
        Lancer la recherche
      </Button>

      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Écris ici ce que tu as trouvé..."
        className="h-40 text-lg"
      />

      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={handleDownload}>
        Télécharger mes notes
      </Button>
    </main>
  );
}