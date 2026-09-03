export default function IndicatorCard({
  titulo,
  valor,
  descricao,
  tipo = "normal",
}) {
  const estilos = {
    normal: "bg-blue-50 text-blue-600",
    perigo: "bg-red-50 text-red-600",
    alerta: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {titulo}
          </p>

          <p className="text-3xl font-bold text-slate-900 mt-2">
            {valor}
          </p>

          <p className="text-sm text-slate-500 mt-2">
            {descricao}
          </p>
        </div>

        <div
          className={`
            w-10
            h-10
            rounded-lg
            flex
            items-center
            justify-center
            font-bold
            ${estilos[tipo]}
          `}
        >
          !
        </div>

      </div>

    </div>
  );
}