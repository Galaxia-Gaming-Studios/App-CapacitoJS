
import { useState } from "react";
import { useLocation } from "react-router";
import { chats } from "../data/chats";

interface SidebarProps {
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export default function Sidebar({
  onClose,
  onNavigate,
}: SidebarProps) {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );

  const actions = [
    { icon: "⌕", label: "Buscar", path: "/search" },
    { icon: "✧", label: "Explorar", path: "/explore" },
    { icon: "▦", label: "Complementos", path: "/plugins" },
    { icon: "◈", label: "Personalizar", path: "/customize" },
    { icon: "▣", label: "Proyectos", path: "/projects" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex ">
      

      {/* FONDO OSCURO */}
      <button
        onClick={onClose}
        aria-label="Cerrar menú"
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]"
      />

      {/* PANEL */}
      <aside className="relative z-10 w-[300px] max-w-[85vw] h-full bg-[#f7fcff] shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">
        <div className="overflow-y-auto">

        {/* CABECERA */}
        <div className="p-4 flex items-center justify-between">
          <span className="font-bold text-lg text-sky-900">
            Space Tech
          </span>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-sky-100 text-slate-500"
          >
            ✕
          </button>
        </div>

        {/* BUSCADOR */}
        <div className="px-3 mb-3">
          <div className="flex items-center gap-2 bg-white border border-sky-100 rounded-xl px-3">
            <span className="text-slate-400">⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar un chat..."
              className="w-full py-3 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* ACCIONES */}
        <nav className="px-3 space-y-1">
          {actions.map(item => (
            <button
              key={item.label}
              onClick={() => {
                onNavigate(item.path);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-sky-100 hover:text-sky-800 transition text-left"
            >
              <span className="text-xl w-6 text-center">
                {item.icon}
              </span>
              <span className="text-sm font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="h-px bg-sky-100 mx-4 my-4" />

        {/* HISTORIAL */}
        <div className="px-4 mb-2 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Tus chats
          </span>
          <span className="text-xs text-slate-400">
            {filteredChats.length}
          </span>
        </div>

        <div className="flex-1  px-3 space-y-1">
          {filteredChats.map(chat => (
            <button
              key={chat.id}
              onClick={() => onNavigate(`/chat/${chat.id}`)}
              className={`w-full text-left p-3 rounded-xl transition ${
                location.pathname === `/chat/${chat.id}`
                  ? "bg-sky-100 text-sky-800"
                  : "text-slate-600 hover:bg-sky-50"
              }`}
            >
              <p className="text-sm font-medium truncate">
                {chat.title}
              </p>
              <p className="text-xs text-slate-400 truncate mt-1">
                {chat.preview}
              </p>
            </button>
          ))}

          {filteredChats.length === 0 && (
            <p className="text-center text-xs text-slate-400 p-5">
              No se encontraron chats.
            </p>
          )}
        </div>
      </div>

        {/* PERFIL FIJO ABAJO */}
        <div className="border-t border-sky-100 p-3">
          <button
            onClick={() => onNavigate("/settings")}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sky-100 transition text-left"
          >
            <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">
              J
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-slate-700">
                Josué
              </p>
              <p className="text-xs text-slate-400">
                Mi cuenta
              </p>
            </div>

            <span className="text-slate-400">⚙</span>
          </button>
        </div>

      </aside>
    </div>
  );
}