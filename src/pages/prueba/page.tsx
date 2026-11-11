import FloatingMenu from "./FloatingMenu";
import { useState } from "react";
import Chat from "./chat";

export default function Page() {
  const [section, setSection] = useState("chat");

  return (
    <main className="min-h-screen bg-[#edf7fb] text-slate-800 md:p-5">
      <div className="max-w-7xl mx-auto min-h-screen md:min-h-[90vh] bg-white md:rounded-[2rem] shadow-xl shadow-sky-100 overflow-hidden flex">

        {/* SIDEBAR */}
        <aside className="w-[76px] md:w-64 bg-[#f5fbfe] border-r border-sky-100 flex flex-col p-3 md:p-5">
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <div className="bg-sky-500 text-white rounded-xl w-11 h-11 flex items-center justify-center text-xl">
              ✦
            </div>
            <span className="hidden md:block font-bold text-lg">
              Space Tech
            </span>
          </div>

          {/*<nav className="flex-1 space-y-2">
            {[
              ["chat", "💬", "Chat"],
              ["profile", "👤", "Perfil"],
              ["settings", "⚙️", "Ajustes"],
              ["Sex", "🧐", "Hot"],
            ].map(([id, icon, label]) => (
              <button
                key={id}
                onClick={() => setSection(id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  section === id
                    ? "bg-sky-100 text-sky-700 font-semibold"
                    : "hover:bg-sky-50 text-slate-500"
                }`}
              >
                <span>{icon}</span>
                <span className="hidden md:block">{label}</span>
              </button>
            ))}
          </nav>*/}
          <header className="flex justify-between items-center p-4">
               <h2>Asistente IA</h2>
                <FloatingMenu />
          </header>

          <div className="border-t border-sky-100 pt-4 text-xs text-slate-400 hidden md:block">
            Space Tech Studio
            <br />
            Version 1.0
          </div>
        </aside>

        {/* ÁREA DE CONTENIDO */}
        <section className="flex-1 min-w-0 min-h-screen">
          {/*{section === "chat" && <Chat />}*/}

          {section === "profile" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold">Mi perfil</h1>
              <p className="text-slate-500 mt-2">
                Información de tu cuenta.
              </p>
              <div className="mt-8 bg-sky-50 rounded-3xl p-6">
                👤 Usuario de prueba
              </div>
            </div>
          )}

          {section === "settings" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold">Ajustes</h1>
              <p className="text-slate-500 mt-2">
                Configuraciones de la aplicación.
              </p>
              <div className="mt-8 space-y-3">
                {["Apariencia", "Notificaciones", "Privacidad"].map(item => (
                  <div key={item} className="p-5 rounded-2xl border border-sky-100">
                    {item} →
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}