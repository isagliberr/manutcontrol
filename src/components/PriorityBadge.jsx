export default function PriorityBadge({ prioridade }) {
  const estilos = {
    baixa: "bg-emerald-100 text-emerald-700",
    media: "bg-amber-100 text-amber-700",
    alta: "bg-orange-100 text-orange-700",
    urgente: "bg-red-100 text-red-700",
  };

  const nomes = {
    baixa: "Baixa",
    media: "Média",
    alta: "Alta",
    urgente: "Urgente",
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
        ${estilos[prioridade] || "bg-slate-100 text-slate-700"}
      `}
    >
      {nomes[prioridade] || prioridade}
    </span>
  );
}