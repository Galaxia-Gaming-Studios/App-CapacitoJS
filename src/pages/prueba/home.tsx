
interface HomeProps {
  onEnter: () => void;
}

export default function Home({ onEnter }: HomeProps) {
  return (
    <main className="min-h-screen bg-[#eaf7fc] text-slate-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto mb-5 h-16 w-16 rounded-3xl bg-white shadow-lg flex items-center justify-center text-3xl">
            🚀
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Space Tech
          </h1>
          <p className="text-slate-500 mt-2">
            Tu espacio para crear e imaginar.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-7 shadow-xl shadow-sky-100 border border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Bienvenido 👋
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Explora herramientas de inteligencia artificial
            y lleva tus ideas más lejos.
          </p>

          <button
            onClick={onEnter}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-2xl py-4 font-semibold transition-all active:scale-95"
          >
            Entrar directamente →
          </button>

          <button
            onClick={onEnter}
            className="w-full mt-3 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-2xl py-4 font-semibold transition-all"
          >
            Crear una cuenta
          </button>

          <p className="text-center text-xs text-slate-400 mt-7">
            SPACE TECH CODE STUDIO
          </p>
        </div>
      </div>
    </main>
  );
}