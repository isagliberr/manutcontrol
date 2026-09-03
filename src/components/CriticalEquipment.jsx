export default function CriticalEquipment({
  equipamentos,
}) {
  const equipamentosCriticos = equipamentos.filter(
    (equipamento) =>
      equipamento.status === "parado" ||
      equipamento.status === "em manutencao" ||
      equipamento.status === "atencao"
  );

  const statusInfo = {
    parado: {
      nome: "Parado",
      classe: "bg-red-100 text-red-700",
      indicador: "border-red-400",
    },

    "em manutencao": {
      nome: "Em manutenção",
      classe: "bg-amber-100 text-amber-700",
      indicador: "border-amber-400",
    },

    atencao: {
      nome: "Atenção",
      classe: "bg-orange-100 text-orange-700",
      indicador: "border-orange-400",
    },
  };

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm">

      <div className="px-5 py-4 border-b border-slate-200">

        <h2 className="text-lg font-bold text-slate-900">
          Equipamentos críticos
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Máquinas que precisam de atenção
        </p>

      </div>

      <div className="p-5">

        {equipamentosCriticos.length === 0 ? (

          <div className="text-center py-8">

            <p className="text-slate-500">
              Nenhum equipamento crítico no momento.
            </p>

          </div>

        ) : (

          <div className="space-y-3">

            {equipamentosCriticos.map((equipamento) => {

              const info =
                statusInfo[equipamento.status];

              return (

                <div
                  key={equipamento.id}
                  className={`
                    p-4
                    rounded-lg
                    border
                    border-slate-200
                    border-l-4
                    ${info.indicador}
                    hover:bg-slate-50
                    transition
                  `}
                >

                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <p className="text-xs font-semibold text-slate-500">
                        {equipamento.codigo}
                      </p>

                      <h3 className="font-semibold text-slate-900 mt-1">
                        {equipamento.nome}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        Setor: {equipamento.setor}
                      </p>

                    </div>

                    <span
                      className={`
                        shrink-0
                        px-2.5
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${info.classe}
                      `}
                    >
                      {info.nome}
                    </span>

                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between">

                    <span className="text-xs text-slate-500">
                      Criticidade
                    </span>

                    <span className="text-xs font-bold text-slate-700 uppercase">
                      {equipamento.criticidade}
                    </span>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

    </section>
  );
}