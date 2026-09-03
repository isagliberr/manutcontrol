export default function StatusBadge({ status }) {
  const estilos = {
    aberta: "bg-blue-100 text-blue-700",
    "em andamento": "bg-indigo-100 text-indigo-700",
    planejada: "bg-slate-100 text-slate-700",
    concluida: "bg-emerald-100 text-emerald-700",
    vencida: "bg-red-100 text-red-700",
  };

  const nomes = {
    aberta: "Aberta",
    "em andamento": "Em andamento",
    planejada: "Planejada",
    concluida: "Concluída",
    vencida: "Vencida",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-2.5
        py-1
        rounded-full
        text-xs
        font-semibold
        ${estilos[status] || "bg-slate-100 text-slate-700"}
      `}
    >
      {nomes[status] || status}
    </span>
  );
}