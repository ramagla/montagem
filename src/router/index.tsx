// src/router/index.tsx
import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"; // 👈 corrigido: subiu um nível

const SECTION_BY_PATH: Record<string, string> = {
  "/servicos": "servicos",
  "/setores": "setores",
  "/diferenciais": "diferenciais",
  "/processo": "processo",
  "/qualidade": "qualidade",
  "/portfolio": "portfolio",
  "/contato": "contato",
};

function HomeWithScroll({ sectionId }: { sectionId?: string }) {
  useEffect(() => {
    // hash legado (#secao) continua funcionando
    if (!sectionId && typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // rota amigável (/secao) -> rola para a seção
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof history !== "undefined") {
        history.replaceState(null, "", `#${sectionId}`);
      }
    }
  }, [sectionId]);

  return <Home />;
}

export const router = createBrowserRouter([
  { path: "/", element: <HomeWithScroll /> },

  // Seções como rotas “reais”
  { path: "/servicos", element: <HomeWithScroll sectionId="servicos" /> },
  { path: "/setores", element: <HomeWithScroll sectionId="setores" /> },
  { path: "/diferenciais", element: <HomeWithScroll sectionId="diferenciais" /> },
  { path: "/processo", element: <HomeWithScroll sectionId="processo" /> },
  { path: "/qualidade", element: <HomeWithScroll sectionId="qualidade" /> },
  { path: "/portfolio", element: <HomeWithScroll sectionId="portfolio" /> },
  { path: "/contato", element: <HomeWithScroll sectionId="contato" /> },

  // Landing/intent extra (se estiver no sitemap)
  { path: "/fabrica-de-molas", element: <HomeWithScroll /> },

  // Fallback
  { path: "*", element: <HomeWithScroll /> },
]);
