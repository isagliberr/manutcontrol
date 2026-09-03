"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import IndicatorCard from "../components/IndicatorCard";
import SearchFilters from "../components/SearchFilters";
import WorkOrderList from "../components/WorkOrderList";
import DailySchedule from "../components/DailySchedule";
import CriticalEquipment from "../components/CriticalEquipment";

import dados from "../data/manutcontrol_dados.json";

export default function Home() {
  // =====================================================
  // ESTADOS DOS FILTROS
  // =====================================================

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("todos");
  const [prioridadeFiltro, setPrioridadeFiltro] = useState("todos");

  // =====================================================
  // DADOS DO JSON
  // =====================================================

  const equipamentos = dados.equipamentos;
  const ordensServico = dados.ordensServico;

  // =====================================================
  // INDICADORES
  // =====================================================

  const ordensAbertas = ordensServico.filter(
    (ordem) =>
      ordem.status === "aberta" ||
      ordem.status === "em andamento" ||
      ordem.status === "planejada"
  ).length;

  const ordensVencidas = ordensServico.filter(
    (ordem) => ordem.status === "vencida"
  ).length;

  const equipamentosParados = equipamentos.filter(
    (equipamento) => equipamento.status === "parado"
  ).length;

  // =====================================================
  // BUSCA E FILTROS
  // =====================================================

  const textoBusca = busca.toLowerCase().trim();

  const ordensFiltradas = ordensServico.filter((ordem) => {
    const equipamento = equipamentos.find(
      (item) => item.id === ordem.equipamentoId
    );

    const correspondeBusca =
      textoBusca === "" ||
      ordem.codigo.toLowerCase().includes(textoBusca) ||
      ordem.descricao.toLowerCase().includes(textoBusca) ||
      ordem.tecnico.toLowerCase().includes(textoBusca) ||
      equipamento?.nome.toLowerCase().includes(textoBusca) ||
      equipamento?.codigo.toLowerCase().includes(textoBusca);

    const correspondeStatus =
      statusFiltro === "todos" ||
      ordem.status === statusFiltro;

    const correspondePrioridade =
      prioridadeFiltro === "todos" ||
      ordem.prioridade === prioridadeFiltro;

    return (
      correspondeBusca &&
      correspondeStatus &&
      correspondePrioridade
    );
  });

  // =====================================================
  // LIMPAR FILTROS
  // =====================================================

  function limparFiltros() {
    setBusca("");
    setStatusFiltro("todos");
    setPrioridadeFiltro("todos");
  }

  // =====================================================
  // TELA
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-100 flex">

      {/* =================================================
          MENU LATERAL
      ================================================= */}

      <div className="hidden lg:block shrink-0">
        <Sidebar />
      </div>

      {/* =================================================
          ÁREA PRINCIPAL
      ================================================= */}

      <div className="flex-1 min-w-0">

        {/* =================================================
            CABEÇALHO
        ================================================= */}

        <Header usuario={dados.usuario} />

        {/* =================================================
            CONTEÚDO
        ================================================= */}

        <div className="p-4 sm:p-6 lg:p-8 space-y-6">

          {/* =================================================
              TÍTULO DA PÁGINA
          ================================================= */}

          <section>
            <p className="text-sm font-medium text-blue-600">
              Painel de manutenção
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Visão geral
            </h1>

            <p className="text-slate-500 mt-2">
              Acompanhe as ordens de serviço e os equipamentos
              que precisam de atenção.
            </p>
          </section>

          {/* =================================================
              INDICADORES
          ================================================= */}

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

            <IndicatorCard
              titulo="Ordens abertas"
              valor={ordensAbertas}
              descricao="Serviços aguardando ou em execução"
              tipo="normal"
            />

            <IndicatorCard
              titulo="Ordens vencidas"
              valor={ordensVencidas}
              descricao="Serviços que passaram do prazo"
              tipo="perigo"
            />

            <IndicatorCard
              titulo="Equipamentos parados"
              valor={equipamentosParados}
              descricao="Máquinas indisponíveis"
              tipo="alerta"
            />

          </section>

          {/* =================================================
              BUSCA E FILTROS
          ================================================= */}

          <SearchFilters
            busca={busca}
            setBusca={setBusca}
            statusFiltro={statusFiltro}
            setStatusFiltro={setStatusFiltro}
            prioridadeFiltro={prioridadeFiltro}
            setPrioridadeFiltro={setPrioridadeFiltro}
            onLimpar={limparFiltros}
          />

          {/* =================================================
              ORDENS DE SERVIÇO
          ================================================= */}

          <WorkOrderList
            ordens={ordensFiltradas}
            equipamentos={equipamentos}
          />

          {/* =================================================
              AGENDA + EQUIPAMENTOS CRÍTICOS
          ================================================= */}

          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* AGENDA DO DIA */}

            <DailySchedule
              ordens={ordensServico}
              equipamentos={equipamentos}
            />

            {/* EQUIPAMENTOS CRÍTICOS */}

            <CriticalEquipment
              equipamentos={equipamentos}
            />

          </section>

        </div>

      </div>

    </main>
  );
}