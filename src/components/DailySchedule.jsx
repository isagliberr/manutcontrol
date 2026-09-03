import StatusBadge from "./StatusBadge";

export default function DailySchedule({
  ordens,
  equipamentos,
}) {
  const ordensAgendadas = ordens
    .filter((ordem) => ordem.horarioAgendado)
    .sort((a, b) =>
      a.horarioAgendado.localeCompare(
        b.horarioAgendado
      )
    );

  function encontrarEquipamento(equipamentoId) {
    return equipamentos.find(
      (equipamento) => equipamento.id === equipamentoId
    );
  }

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm">

      <div className="px-5 py-4 border-b border-slate-200">

        <h2 className="text-lg font-bold text-slate-900">
          Agenda do dia
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Serviços programados por horário
        </p>

      </div>

      <div className="p-5">

        {ordensAgendadas.length === 0 ? (

          <div className="text-center py-8">

            <p className="text-slate-500">
              Nenhum serviço agendado.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {ordensAgendadas.map((ordem) => {

              const equipamento =
                encontrarEquipamento(
                  ordem.equipamentoId
                );

              return (

                <div
                  key={ordem.id}
                  className="
                    flex
                    gap-4
                    p-4
                    rounded-lg
                    bg-slate-50
                    border
                    border-slate-200
                  "
                >

                  <div className="min-w-16">

                    <p className="text-lg font-bold text-blue-600">
                      {ordem.horarioAgendado}
                    </p>

                  </div>

                  <div className="w-px bg-slate-300"></div>

                  <div className="flex-1">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                      <h3 className="font-semibold text-slate-900">
                        {ordem.descricao}
                      </h3>

                      <StatusBadge status={ordem.status} />

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">

                      <p className="text-sm text-slate-600">

                        <span className="font-medium">
                          Equipamento:
                        </span>{" "}

                        {equipamento?.nome || "-"}

                      </p>

                      <p className="text-sm text-slate-600">

                        <span className="font-medium">
                          Técnico:
                        </span>{" "}

                        {ordem.tecnico}

                      </p>

                    </div>

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