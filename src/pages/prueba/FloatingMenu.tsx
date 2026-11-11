
import { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const options = [
    { icon: "💬", label: "Nuevo chat" },
    { icon: "🔎", label: "Buscar" },
    { icon: "🖼️", label: "Crear imagen" },
    { icon: "📁", label: "Archivos" },
    { icon: "⚙️", label: "Configuración" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <>
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />

          <div className="absolute right-0 top-14 z-50 w-60 bg-white border border-sky-100 rounded-2xl shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
            {options.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setOpen(false);
                  console.log(item.label);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sky-50 text-sm text-slate-700 transition"
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}