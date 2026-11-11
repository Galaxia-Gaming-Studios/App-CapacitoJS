
import { useState } from "react";

const conversations = [
  { id: 1, name: "Ideas de programación", message: "Hablemos de React..." },
  { id: 2, name: "Inteligencia artificial", message: "Los modelos de IA..." },
  { id: 3, name: "Proyecto personal", message: "Tengo una nueva idea..." },
];

export default function Chat() {
  const [selected, setSelected] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tool, setTool] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "¡Hola! ¿Qué vamos a crear hoy?", user: false },
  ]);

  const current = conversations.find(c => c.id === selected);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, user: true }]);
    setMessage("");
  }

  return (
    <div className="h-screen md:min-h-[90vh] flex flex-col bg-white">

      {/* HEADER */}
      <header className="h-16 px-5 border-b border-sky-100 flex items-center justify-between">
        <div>
          <h2 className="font-bold">Asistente IA</h2>
          <p className="text-xs text-slate-400">En línea</p>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 text-xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* MENÚ DE COMPLEMENTOS */}
      {menuOpen && (
        <div className="absolute z-20 right-5 top-20 w-64 bg-white border border-sky-100 shadow-2xl rounded-2xl p-3">
          <p className="text-xs text-slate-400 font-semibold px-3 py-2">
            COMPLEMENTOS
          </p>

          {["Generador de imágenes", "Analizador de archivos", "Investigación web"].map(item => (
            <button
              key={item}
              onClick={() => {
                setTool(item);
                setMenuOpen(false);
              }}
              className="w-full text-left p-3 rounded-xl hover:bg-sky-50 text-sm"
            >
              ✦ {item}
            </button>
          ))}

          <button
            onClick={() => setTool("")}
            className="w-full text-left p-3 text-sm text-slate-400 hover:bg-slate-50 rounded-xl"
          >
            Volver al chat
          </button>
        </div>
      )}

      <div className="flex flex-1 min-h-0">

        {/* LISTA DE CHATS */}
        <aside className="w-16 sm:w-56 border-r border-sky-100 p-2 sm:p-4 flex flex-col">
          <button className="bg-sky-500 text-white rounded-xl p-3 text-sm font-semibold mb-5">
            <span className="sm:hidden">+</span>
            <span className="hidden sm:inline">+ Nuevo chat</span>
          </button>

          <p className="hidden sm:block text-xs text-slate-400 mb-3">
            RECIENTES
          </p>

          {conversations.map(chat => (
            <button
              key={chat.id}
              onClick={() => {
                setSelected(chat.id);
                setTool("");
              }}
              className={`text-left rounded-xl p-3 mb-2 transition ${
                selected === chat.id
                  ? "bg-sky-100 text-sky-700"
                  : "hover:bg-sky-50 text-slate-500"
              }`}
            >
              <span className="sm:hidden">💬</span>
              <span className="hidden sm:block text-sm font-medium truncate">
                {chat.name}
              </span>
              <span className="hidden sm:block text-xs text-slate-400 truncate mt-1">
                {chat.message}
              </span>
            </button>
          ))}
        </aside>

        {/* CONTENIDO DEL CHAT */}
        <section className="flex-1 min-w-0 flex flex-col">

          {tool ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-sky-50/40">
              <div className="text-5xl mb-4">✦</div>
              <h2 className="text-2xl font-bold">{tool}</h2>
              <p className="text-slate-400 text-sm mt-2">
                Esta es una pantalla de prueba del complemento.
              </p>
              <button
                onClick={() => setTool("")}
                className="mt-6 bg-sky-500 text-white px-6 py-3 rounded-xl"
              >
                Regresar al chat
              </button>
            </div>
          ) : (
            <>
              <div className="p-5 border-b border-sky-50">
                <h3 className="font-semibold">{current?.name}</h3>
                <p className="text-xs text-slate-400">
                  Conversación de prueba
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${item.user ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                      item.user
                        ? "bg-sky-500 text-white rounded-br-sm"
                        : "bg-sky-50 text-slate-700 rounded-bl-sm"
                    }`}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* INPUT */}
              <div className="p-4 border-t border-sky-100">
                <div className="flex gap-2 items-center bg-sky-50 rounded-2xl p-2">
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="w-10 h-10 text-sky-600 text-xl"
                  >
                    +
                  </button>

                  <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder="Escribí tu mensaje..."
                    className="flex-1 min-w-0 bg-transparent outline-none text-sm px-2"
                  />

                  <button
                    onClick={sendMessage}
                    className="bg-sky-500 text-white rounded-xl w-10 h-10"
                  >
                    ↑
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}