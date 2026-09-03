import WorkOrderRow from "./WorkOrderRow";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import RiskBadge from "./RiskBadge";

export default function WorkOrderList({
  ordens,
  equipamentos,
}) {
  function encontrarEquipamento(equipamentoId) {
    return equipamentos.find(
      (equipamento) => equipamento.id === equipamentoId
    );
  }

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

      {/* CABEÇALHO */}

      <div className="px-5 py-4 border-b border-slate-200">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Ordens de serviço
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {ordens.length} ordem(ns) encontrada(s)
            </p>

          </div>

        </div>

      </div>

      {/* SEM RESULTADOS */}

      {ordens.length === 0 ? (

        <div className="px-6 py-12 text-center">

          <div className="text-4xl mb-3">
            🔍
          </div>

          <h3 className="text-lg font-semibold text-slate-900">
            Nenhuma ordem encontrada
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Tente pesquisar por outro código, descrição,
            equipamento ou técnico.
          </p>

        </div>

      ) : (

        <>

          {/* TABELA DESKTOP */}

          <div className="hidden lg:block overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-slate-50">

                <tr className="text-left text-slate-500">

                  <th className="px-4 py-3 font-semibold">
                    Código
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Descrição
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Equipamento
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Prioridade
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Técnico
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Vencimento
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Risco
                  </th>

                </tr>

              </thead>

              <tbody>

                {ordens.map((ordem) => (

                  <WorkOrderRow
                    key={ordem.id}
                    ordem={ordem}
                    equipamento={encontrarEquipamento(
                      ordem.equipamentoId
                    )}
                  />

                ))}

              </tbody>

            </table>

          </div>

          {/* CARDS MOBILE */}

          <div className="lg:hidden divide-y divide-slate-200">

            {ordens.map((ordem) => {

              const equipamento = encontrarEquipamento(
                ordem.equipamentoId
              );

              return (

                <article
                  key={ordem.id}
                  className={`
                    p-5
                    ${
                      ordem.status === "vencida"
                        ? "bg-red-50/50"
                        : ""
                    }
                  `}
                >

                  {/* CÓDIGO + STATUS */}

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <p className="font-bold text-slate-900">
                        {ordem.codigo}
                      </p>

                      {ordem.status === "vencida" && (

                        <p className="text-xs text-red-600 font-bold mt-1">
                          ⚠ Ordem vencida
                        </p>

                      )}

                    </div>

                    <StatusBadge status={ordem.status} />

                  </div>

                  {/* DESCRIÇÃO */}

                  <p className="text-slate-700 mt-4">
                    {ordem.descricao}
                  </p>

                  {/* INFORMAÇÕES */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                    {/* EQUIPAMENTO */}

                    <div>

                      <p className="text-xs text-slate-500">
                        Equipamento
                      </p>

                      <p className="text-sm font-medium text-slate-800 mt-1">
                        {equipamento?.nome || "-"}
                      </p>

                      <p className="text-xs text-slate-500">
                        {equipamento?.codigo || "-"}
                      </p>

                    </div>

                    {/* TÉCNICO */}

                    <div>

                      <p className="text-xs text-slate-500">
                        Técnico
                      </p>

                      <p className="text-sm font-medium text-slate-800 mt-1">
                        {ordem.tecnico}
                      </p>

                    </div>

                    {/* PRIORIDADE */}

                    <div>

                      <p className="text-xs text-slate-500">
                        Prioridade
                      </p>

                      <div className="mt-1">
                        <PriorityBadge
                          prioridade={ordem.prioridade}
                        />
                      </div>

                    </div>

                    {/* VENCIMENTO */}

                    <div>

                      <p className="text-xs text-slate-500">
                        Vencimento
                      </p>

                      <p
                        className={`
                          text-sm
                          mt-1
                          font-medium
                          ${
                            ordem.status === "vencida"
                              ? "text-red-600"
                              : "text-slate-800"
                          }
                        `}
                      >
                        {new Date(
                          `${ordem.vencimento}T00:00:00`
                        ).toLocaleDateString("pt-BR")}
                      </p>

                    </div>

                    {/* RISCO */}

                    <div className="sm:col-span-2">

                      <p className="text-xs text-slate-500">
                        Nível de risco
                      </p>

                      <div className="mt-1">
                        <RiskBadge
                          ordem={ordem}
                          equipamento={equipamento}
                        />
                      </div>

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

        </>

      )}

    </section>
  );
}