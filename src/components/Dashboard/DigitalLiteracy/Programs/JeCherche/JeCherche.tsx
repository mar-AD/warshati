"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "./input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./textArea";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Loader2 } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 !m-0" onClick={onClose}>
      <div className="bg-white rounded-lg w-full max-w-6xl h-[80vh] p-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

type SearchEngineKey = "kiddle" | "google" | "bing" | "duckduckgo" | "ecosia";

type SearchEngine = {
  normalUrl: string;
  safeUrl: string;
  name: string;
};

type SearchEngines = {
  [key in SearchEngineKey]: SearchEngine;
};

export default function JeCherche() {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState<SearchEngineKey>("kiddle");
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"internet" | "local">("internet");

  const searchEngineConfig: SearchEngines = {
    kiddle: {
      normalUrl: "https://www.kiddle.co/s.php?q=",
      safeUrl: "https://www.kiddle.co/s.php?q=",
      name: "Kiddle"
    },
    google: {
      normalUrl: "https://www.google.com/search?q=",
      safeUrl: "https://www.google.com/search?q=&safe=active",
      name: "Google"
    },
    bing: {
      normalUrl: "https://www.bing.com/search?q=",
      safeUrl: "https://www.bing.com/search?q=&adlt=strict",
      name: "Bing"
    },
    duckduckgo: {
      normalUrl: "https://duckduckgo.com/?q=",
      safeUrl: "https://duckduckgo.com/?q=",
      name: "DuckDuckGo"
    },
    ecosia: {
      normalUrl: "https://www.ecosia.org/search?q=",
      safeUrl: "https://www.ecosia.org/search?q=",
      name: "Ecosia"
    }
  };

  const searchEngines = useMemo<SearchEngines>(() => {
    const queryEncoded = encodeURIComponent(query);
    
    return {
      kiddle: {
        ...searchEngineConfig.kiddle,
        normalUrl: `${searchEngineConfig.kiddle.normalUrl}${queryEncoded}`,
        safeUrl: `${searchEngineConfig.kiddle.safeUrl}${queryEncoded}`
      },
      google: {
        ...searchEngineConfig.google,
        normalUrl: `${searchEngineConfig.google.normalUrl}${queryEncoded}`,
        safeUrl: `${searchEngineConfig.google.safeUrl.replace("&safe=active", `${queryEncoded}&safe=active`)}`
      },
      bing: {
        ...searchEngineConfig.bing,
        normalUrl: `${searchEngineConfig.bing.normalUrl}${queryEncoded}`,
        safeUrl: `${searchEngineConfig.bing.safeUrl.replace("&adlt=strict", `${queryEncoded}&adlt=strict`)}`
      },
      duckduckgo: {
        ...searchEngineConfig.duckduckgo,
        normalUrl: `${searchEngineConfig.duckduckgo.normalUrl}${queryEncoded}`,
        safeUrl: `${searchEngineConfig.duckduckgo.safeUrl}${queryEncoded}`
      },
      ecosia: {
        ...searchEngineConfig.ecosia,
        normalUrl: `${searchEngineConfig.ecosia.normalUrl}${queryEncoded}`,
        safeUrl: `${searchEngineConfig.ecosia.safeUrl}${queryEncoded}`
      }
    };
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) return;

    if (mode === "internet") {
      setIsLoading(true);
      setShowModal(true);
      setTimeout(() => setIsLoading(false), 1500);
    } else {
      setShowModal(true);
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
    URL.revokeObjectURL(url);
  };

  const normalUrl = useMemo(() => {
    if (!query) return "";
    return searchEngines[source].normalUrl;
  }, [query, searchEngines, source]);

  const safeUrl = useMemo(() => {
    if (!query) return "";
    return searchEngines[source].safeUrl;
  }, [query, searchEngines, source]);

  return (
    <div className="realtive flex items-center justify-center w-full h-full">
    <main className=" w-[60%] mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Je cherche une information</h1>

      {/* MODE TOGGLE */}
      <div className="flex justify-center gap-4 mb-4">
        <Button variant={mode === "internet" ? "default" : "outline"} onClick={() => setMode("internet")}>
          🌐 Internet
        </Button>
        <Button variant={mode === "local" ? "default" : "outline"} onClick={() => setMode("local")}>
          💾 Local
        </Button>
      </div>

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tape ici ce que tu veux chercher..."
        className="text-lg"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      {/* Only show engines if mode is internet */}
      {mode === "internet" && (
        <RadioGroup 
          value={source} 
          onValueChange={(value: string) => setSource(value as SearchEngineKey)} 
          className="flex flex-wrap gap-4 justify-center"
        >
          {(Object.keys(searchEngines) as SearchEngineKey[]).map((engine) => (
            <RadioGroupItem 
              key={engine} 
              value={engine} 
              label={searchEngines[engine].name} 
            />
          ))}
        </RadioGroup>
      )}

      <Button 
        className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2" 
        onClick={handleSearch}
      >
        Lancer la recherche
      </Button>

      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Écris ici ce que tu as trouvé..."
        className="h-40 text-lg"
      />

      <Button 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
        onClick={handleDownload}
        disabled={!notes.trim()}
      >
        Télécharger mes notes
      </Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {mode === "internet" ? (
          <div className="h-full flex flex-col">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">{searchEngines[source].name} - Résultats pour: {query}</h2>
              <Button onClick={() => setShowModal(false)} variant="outline">Fermer</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-grow h-full">
              <div className="flex flex-col h-full">
                <p className="mb-2 font-medium">Recherche Standard:</p>
                <div className="rounded border h-full overflow-hidden">
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                        <p>Chargement des résultats...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-50 p-4 overflow-auto">
                      {/* <div className="mb-4 bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                        <p className="text-sm text-yellow-800">Moteur de recherche actuel: <strong>{searchEngines[source].name}</strong></p>
                        <p className="text-xs text-yellow-700 mt-1">URL: {normalUrl}</p>
                      </div> */}
                      <iframe 
                        src={normalUrl} 
                        className="w-full h-full border-0" 
                        sandbox="allow-same-origin allow-scripts"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <p className="mb-2 font-medium">Recherche Sécurisée:</p>
                <div className="rounded border h-full overflow-hidden">
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                        <p>Chargement des résultats...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-50 p-4 overflow-auto">
                      {/* <div className="mb-4 bg-green-50 border border-green-200 p-3 rounded-md">
                        <p className="text-sm text-green-800">Moteur de recherche actuel: <strong>{searchEngines[source].name}</strong></p>
                        <p className="text-xs text-green-700 mt-1">URL: {safeUrl}</p>
                      </div> */}
                      <iframe 
                        src={safeUrl} 
                        className="w-full h-full border-0" 
                        sandbox="allow-same-origin allow-scripts"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Mode Local Actif</h2>
            <Button className="mt-6" onClick={() => setShowModal(false)} variant="outline">Fermer</Button>
          </div>
        )}
      </Modal>
    </main>
    </div>
  );
}
