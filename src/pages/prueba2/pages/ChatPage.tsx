
import { useState } from "react";
import { useParams } from "react-router";
import { chats } from "../data/chats";

export default function ChatPage() {
  const { chatId } = useParams();

  const currentChat = chats.find(chat => chat.id === chatId);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! ¿Qué vamos a crear hoy?",
      user: false,
    },
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        user: true,
      },
    ]);

    setMessage("");
  }

  if (!currentChat) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        Conversación no encontrada.
      </div>
    );
  }

  return (
    <div className="h-[calc(100dvh-64px)] flex flex-col max-w-4xl mx-auto">

      {/* TÍTULO */}
      <header className="p-5 border-b border-sky-50">
        <h1 className="font-semibold text-lg">
          {currentChat.title}
        </h1>
        <p className="text-xs text-slate-400">
          Conversación de prueba
        </p>
      </header>

      {/* MENSAJES */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {messages.map(item => (
          <div
            key={item.id}
            className={`flex ${
              item.user ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                item.user
                  ? "bg-sky-500 text-white rounded-br-sm"
                  : "bg-sky-50 text-slate-700 rounded-bl-sm"
              }`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-4">
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-white border border-sky-100 shadow-sm">
          <button className="w-10 h-10 rounded-xl hover:bg-sky-50 text-sky-600 text-xl">
            +
          </button>

          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Escribe un mensaje..."
            className="flex-1 min-w-0 outline-none bg-transparent text-sm"
          />

          <button
            onClick={sendMessage}
            className="w-10 h-10 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition"
          >
            ↑
          </button>
        </div>

        <p className="text-center text-[10px] text-slate-400 mt-3">
          Space Tech · Interfaz de demostración
        </p>
      </div>
    </div>
  );
}