
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#edf7fb] text-slate-800">

      {/* HEADER */}
      <header className="h-16 px-4 flex items-center gap-4 bg-white border-b border-sky-100">
        <button
          onClick={() => setMenuOpen(true)}
          className="w-10 h-10 rounded-xl hover:bg-sky-50 text-slate-600 text-xl transition"
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <button
          onClick={() => navigate("/chat/")}
          className="font-bold text-lg tracking-tight"
        >
          Space Tech in josue
        </button>

        <div className="flex-1" />

        <button
          onClick={() => navigate("/chat/1")}
          className="w-10 h-10 rounded-xl hover:bg-sky-50 text-sky-600 text-xl"
          aria-label="Nuevo chat"
        >
          ✎
        </button>
      </header>

      {/* CONTENIDO DE LAS RUTAS */}
      <section className="min-h-[calc(100vh-64px)]">
  
        {/*<Outlet />*/}
      </section>

      {/* MENÚ LATERAL */}
      {menuOpen && (
        <Sidebar
          onClose={() => setMenuOpen(false)}
          onNavigate={(path) => {
            navigate(path);
            setMenuOpen(false);
          }}
        />
      )}
    </main>
  );
}