"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          Manut<span className="text-blue-500">Control</span>
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Indústria Atlas
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-lg bg-blue-600 text-white font-medium"
            >
              Visão geral
            </button>
          </li>

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Ordens de serviço
            </button>
          </li>

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Equipamentos
            </button>
          </li>

          <li>
            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Técnicos
            </button>
          </li>

        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          type="button"
          className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition"
        >
          Sair
        </button>
      </div>

    </aside>
  );
}