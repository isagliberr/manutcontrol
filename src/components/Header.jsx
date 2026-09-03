"use client";

export default function Header({ usuario }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            ManutControl
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Olá, {usuario} 👋
          </h2>

          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Acompanhe as manutenções e os serviços que precisam de atenção.
          </p>
        </div>

        <button
          type="button"
          className="
            w-full
            md:w-auto
            inline-flex
            items-center
            justify-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            active:bg-blue-800
            text-white
            font-semibold
            px-5
            py-3
            rounded-lg
            shadow-sm
            hover:shadow
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            focus:ring-offset-2
            transition
            duration-200
          "
        >
          <span className="text-lg leading-none">+</span>
          <span>Nova ordem</span>
        </button>

      </div>

    </header>
  );
}