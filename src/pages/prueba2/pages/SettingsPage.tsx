
export default function SettingsPage() {
  const settings = [
    {
      title: "Apariencia",
      description: "Personaliza el aspecto de la aplicación.",
      icon: "🎨",
    },
    {
      title: "Notificaciones",
      description: "Controla tus notificaciones.",
      icon: "🔔",
    },
    {
      title: "Privacidad",
      description: "Administra tus datos y privacidad.",
      icon: "🔒",
    },
    {
      title: "Cuenta",
      description: "Información y detalles de tu cuenta.",
      icon: "👤",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto p-5 md:p-10">

      <div className="mb-10">
        <p className="text-sm text-sky-600 font-medium">
          CUENTA
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Configuración
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Administra tu experiencia en Space Tech.
        </p>
      </div>

      <div className="bg-sky-50 rounded-3xl p-5 flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-sky-200 flex items-center justify-center text-xl font-bold text-sky-800">
          J
        </div>

        <div>
          <h2 className="font-semibold">Josué</h2>
          <p className="text-sm text-slate-500">
            Usuario de prueba
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {settings.map(item => (
          <button
            key={item.title}
            className="w-full flex items-center gap-4 p-5 rounded-2xl border border-sky-100 hover:bg-sky-50 transition text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {item.description}
              </p>
            </div>

            <span className="text-slate-400">→</span>
          </button>
        ))}
      </div>
    </main>
  );
}