export default function RiskBadge({ ordem, equipamento }) {
  let pontos = 0;

  // Pontuação da prioridade da ordem
  const pontosPrioridade = {
    baixa: 1,
    media: 2,
    alta: 3,
    urgente: 4,
  };

  // Pontuação da criticidade do equipamento
  const pontosCriticidade = {
    baixa: 1,
    media: 2,
    alta: 3,
  };

  // Pontuação da situação do equipamento
  const pontosStatus = {
    operando: 0,
    atencao: 1,
    "em manutencao": 2,
    parado: 3,
  };

  pontos += pontosPrioridade[ordem.prioridade] || 0;
  pontos += pontosCriticidade[equipamento?.criticidade] || 0;
  pontos += pontosStatus[equipamento?.status] || 0;

  let risco;

  if (pontos >= 8) {
    risco = {
      nome: "Risco crítico",
      classe: "bg-red-100 text-red-700 border-red-200",
    };
  } else if (pontos >= 6) {
    risco = {
      nome: "Risco alto",
      classe: "bg-orange-100 text-orange-700 border-orange-200",
    };
  } else if (pontos >= 4) {
    risco = {
      nome: "Risco moderado",
      classe: "bg-amber-100 text-amber-700 border-amber-200",
    };
  } else {
    risco = {
      nome: "Risco baixo",
      classe: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        px-2.5
        py-1
        rounded-full
        border
        text-xs
        font-semibold
        ${risco.classe}
      `}
    >
      {risco.nome}
    </span>
  );
}