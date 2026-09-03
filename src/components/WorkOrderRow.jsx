import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import RiskBadge from "./RiskBadge";

export default function WorkOrderRow({
  ordem,
  equipamento,
}) {
  const vencida = ordem.status === "vencida";

  return (
    <tr
      className={`
        border-b
        border-slate-200
        hover:bg-slate-50
        transition
        ${vencida ? "bg-red-50/50" : ""}
      `}
    >
      {/* CÓDIGO */}

      <td className="px-4 py-4">
        <span className="font-semibold text-slate-900">
          {ordem.codigo}
        </span>

        {vencida && (
          <span className="block text-xs font-semibold text-red-600 mt-1">
            ⚠ Ordem vencida
          </span>
        )}
      </td>

      {/* DESCRIÇÃO */}

      <td className="px-4 py-4 text-slate-700">
        {ordem.descricao}
      </td>

      {/* EQUIPAMENTO */}

      <td className="px-4 py-4">
        <p className="font-medium text-slate-800">
          {equipamento?.nome || "Equipamento não encontrado"}
        </p>

        <p className="text-xs text-slate-500 mt-1">
          {equipamento?.codigo || "-"}
        </p>
      </td>

      {/* PRIORIDADE */}

      <td className="px-4 py-4">
        <PriorityBadge prioridade={ordem.prioridade} />
      </td>

      {/* TÉCNICO */}

      <td className="px-4 py-4 text-slate-700">
        {ordem.tecnico}
      </td>

      {/* VENCIMENTO */}

      <td className="px-4 py-4">
        <span
          className={
            vencida
              ? "font-bold text-red-600"
              : "text-slate-700"
          }
        >
          {new Date(
            `${ordem.vencimento}T00:00:00`
          ).toLocaleDateString("pt-BR")}
        </span>
      </td>

      {/* STATUS */}

      <td className="px-4 py-4">
        <StatusBadge status={ordem.status} />
      </td>

      {/* RISCO */}

      <td className="px-4 py-4">
        <RiskBadge
          ordem={ordem}
          equipamento={equipamento}
        />
      </td>
    </tr>
  );
}