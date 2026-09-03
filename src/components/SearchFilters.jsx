"use client";

export default function SearchFilters({
  busca,
  setBusca,
  statusFiltro,
  setStatusFiltro,
  prioridadeFiltro,
  setPrioridadeFiltro,
  onLimpar,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">

        {/* BUSCA */}

        <div className="flex-1">

          <label
            htmlFor="busca"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Buscar ordem de serviço
          </label>

          <input
            id="busca"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Código, descrição, equipamento ou técnico..."
            className="
              w-full
              px-4
              py-3
              border
              border-slate-300
              rounded-lg
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          />

        </div>

        {/* STATUS */}

        <div className="w-full lg:w-48">

          <label
            htmlFor="status"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Status
          </label>

          <select
            id="status"
            value={statusFiltro}
            onChange={(e) => setStatusFiltro(e.target.value)}
            className="
              w-full
              px-4
              py-3
              border
              border-slate-300
              rounded-lg
              bg-white
              text-slate-900
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option value="todos">Todos</option>
            <option value="aberta">Aberta</option>
            <option value="em andamento">Em andamento</option>
            <option value="planejada">Planejada</option>
            <option value="concluida">Concluída</option>
            <option value="vencida">Vencida</option>
          </select>

        </div>

        {/* PRIORIDADE */}

        <div className="w-full lg:w-48">

          <label
            htmlFor="prioridade"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Prioridade
          </label>

          <select
            id="prioridade"
            value={prioridadeFiltro}
            onChange={(e) => setPrioridadeFiltro(e.target.value)}
            className="
              w-full
              px-4
              py-3
              border
              border-slate-300
              rounded-lg
              bg-white
              text-slate-900
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option value="todos">Todas</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>

        </div>

        {/* LIMPAR */}

        <button
          type="button"
          onClick={onLimpar}
          className="
            px-5
            py-3
            rounded-lg
            border
            border-slate-300
            text-slate-700
            font-medium
            hover:bg-slate-100
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
        >
          Limpar filtros
        </button>

      </div>

    </div>
  );
}