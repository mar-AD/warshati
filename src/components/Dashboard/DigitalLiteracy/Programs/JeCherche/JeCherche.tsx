"use client";

import { useState, useEffect } from "react";
import { Input } from "./input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./textArea";
import { Loader2, ShieldAlert, ShieldCheck, Info } from "lucide-react";

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
      <div className="bg-white rounded-lg w-full max-w-[80%] h-[80vh] p-4 overflow-hidden" onClick={e => e.stopPropagation()}>
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
  safety: "high" | "medium";
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
  const [showSafetyTip, setShowSafetyTip] = useState(false);
  const [iframeLoading, setIframeLoading] = useState({
    standard: true,
    safe: true
  });

  const searchEngineConfig: SearchEngines = {
    kiddle: {
      normalUrl: "https://www.kiddle.co/s.php?q=",
      safeUrl: "https://www.kiddle.co/s.php?q=",
      name: "Kiddle",
      safety: "high"
    },
    google: {
      normalUrl: "https://www.google.com/search?q=",
      safeUrl: "https://www.google.com/search?q=",
      name: "Google",
      safety: "medium"
    },
    bing: {
      normalUrl: "https://www.bing.com/search?q=",
      safeUrl: "https://www.bing.com/search?q=",
      name: "Bing",
      safety: "high"
    },
    duckduckgo: {
      normalUrl: "https://duckduckgo.com/?q=",
      safeUrl: "https://duckduckgo.com/?q=",
      name: "DuckDuckGo",
      safety: "medium"
    },
    ecosia: {
      normalUrl: "https://www.ecosia.org/search?q=",
      safeUrl: "https://www.ecosia.org/search?q=",
      name: "Ecosia",
      safety: "medium"
    }
  };

  const buildSafeUrl = (query: string): string => {
    const encodedQuery = encodeURIComponent(query);
    let url = searchEngineConfig[source].safeUrl + encodedQuery;
    
    switch(source) {
      case "google":
        url += "&safe=active&ssui=on";
        break;
      case "bing":
        url += "&adlt=strict&safeSearch=strict";
        break;
      case "duckduckgo":
        url += "&kp=1";
        break;
      case "ecosia":
        url += "&safeSearch=strict";
        break;
    }
    
    return url;
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setShowModal(true);
    setIframeLoading({ standard: true, safe: true });
    setTimeout(() => setIsLoading(false), 500);
  };

  const normalUrl = searchEngineConfig[source].normalUrl + encodeURIComponent(query);
  const safeUrl = buildSafeUrl(query);

  const handleDownload = () => {
    const blob = new Blob([notes], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mes_notes.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <main className="w-[60%] mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Je cherche une information</h1>

        <div className="flex justify-center gap-4 mb-4">
          <Button 
            variant={mode === "internet" ? "default" : "outline"} 
            onClick={() => setMode("internet")}
          >
            Internet
          </Button>
          <Button 
            variant={mode === "local" ? "default" : "outline"} 
            onClick={() => setMode("local")}
          >
            Local
          </Button>
        </div>

        <div className="relative">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tape ici ce que tu veux chercher..."
            className="text-lg pr-10"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button 
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowSafetyTip(!showSafetyTip)}
          >
            <Info className="h-5 w-5" />
          </button>
          {showSafetyTip && (
            <div className="absolute right-0 mt-2 w-64 p-3 bg-white border rounded-lg shadow-lg z-10">
              <p className="text-sm">Conseil : Utilisez des mots simples et précis pour de meilleurs résultats</p>
            </div>
          )}
        </div>

        {mode === "internet" && (
          <div className="flex flex-col items-center gap-4">
            <p className="font-medium">Choisis un moteur de recherche:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {(Object.keys(searchEngineConfig) as SearchEngineKey[]).map((engine) => (
                <div key={engine} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={engine}
                    name="search-engine"
                    value={engine}
                    checked={source === engine}
                    onChange={() => setSource(engine)}
                    className="accent-blue-500"
                  />
                  <label htmlFor={engine} className="flex items-center gap-1">
                    {searchEngineConfig[engine].name}
                    {searchEngineConfig[engine].safety === "high" && (
                      <ShieldCheck className="h-4 w-4 text-green-500" />
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="relative group">
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2" 
            onClick={handleSearch}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Chargement...
              </>
            ) : (
              "Lancer la recherche"
            )}
          </Button>
        </div>

        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Écris ici ce que tu as trouvé..."
          className="h-40 text-lg"
        />

        <details className="mt-2 text-sm text-gray-600 border rounded-lg p-3">
          <summary className="font-medium cursor-pointer">Conseils de recherche sécurisée</summary>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Les moteurs avec <ShieldCheck className="inline h-3 w-3 text-green-500" /> offrent une meilleure protection</li>
            <li>Lisez toujours les résultats avec un adulte</li>
            <li>Signalez les contenus inappropriés</li>
            <li>Utilisez des mots simples et précis</li>
          </ul>
        </details>

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
                <div>
                  <h2 className="text-xl font-bold">
                    {searchEngineConfig[source].name} - Résultats pour: {query}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {searchEngineConfig[source].safety === "high" ? (
                      <ShieldCheck className="text-green-500 h-4 w-4" />
                    ) : (
                      <ShieldAlert className="text-yellow-500 h-4 w-4" />
                    )}
                    <span>
                      Protection: {searchEngineConfig[source].safety === "high" ? "Élevée" : "Modérée"}
                    </span>
                  </div>
                </div>
                <Button onClick={() => setShowModal(false)} variant="outline">
                  Fermer
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow h-[calc(100%-60px)]">
                {/* Standard Search */}
                <div className="flex flex-col h-full">
                  <p className="mb-2 font-medium">Recherche Standard:</p>
                  <div className="rounded border h-full overflow-hidden flex flex-col">
                    {iframeLoading.standard && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <Loader2 className="h-8 w-8 animate-spin" />
                      </div>
                    )}
                    <iframe 
                      src={normalUrl}
                      onLoad={() => setIframeLoading(prev => ({ ...prev, standard: false }))}
                      className={`flex-grow border-0 ${iframeLoading.standard ? 'hidden' : 'block'}`}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      referrerPolicy="no-referrer"
                      title="Recherche standard"
                    />
                    <Button asChild>
                      <a href={normalUrl} target="_blank" rel="noopener noreferrer">
                        Ouvrir dans un nouvel onglet
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Safe Search */}
                <div className="flex flex-col h-full">
                  <p className="mb-2 font-medium">Recherche Sécurisée:</p>
                  <div className="rounded border h-full overflow-hidden flex flex-col">
                    {iframeLoading.safe && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <Loader2 className="h-8 w-8 animate-spin" />
                      </div>
                    )}
                    <iframe
                      src={safeUrl}
                      onLoad={() => setIframeLoading(prev => ({ ...prev, safe: false }))}
                      className={`flex-grow border-0 ${iframeLoading.safe ? 'hidden' : 'block'}`}
                      sandbox="allow-same-origin allow-scripts"
                      referrerPolicy="no-referrer"
                      title="Recherche sécurisée"
                    />
                    <Button asChild>
                      <a href={safeUrl} target="_blank" rel="noopener noreferrer">
                        Ouvrir dans un nouvel onglet
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Mode Local Actif</h2>
              <Button onClick={() => setShowModal(false)} variant="outline">
                Fermer
              </Button>
            </div>
          )}
        </Modal>
      </main>
    </div>
  );
}
