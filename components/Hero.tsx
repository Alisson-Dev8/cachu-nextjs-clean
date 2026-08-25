import { SITE } from "@/lib/site";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBNsNmjypViQzq7Ic5dZJxbDevEZvyNobquQSnVJAAw4IgW4Wk0LUkjpQdtVJg4GW40MnMKPlxkCrKK43HzFbmFYxLjQg8ozUyd9NDUx2TNwZr00MMscWsaPHwpuWHyiwi14zQ7jmIixUpzPUSrv4ycgCG69qEfjrQB08KO8GNRye9jC_gNnO6wyGCogPGx5KrYncrAzbwnG1EDsYrL0dNv5PDcfshzO39fK65H_RiVACDJxJIUU0Hr";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[620px] h-[88vh] max-h-[780px] flex items-center overflow-hidden pt-16"
    >
      {/* IMAGEM DE FUNDO E OVERLAY PROFISSIONAL */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Comida caseira bem servida e fresquinha"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
        />
        {/* Gradiente direcional escuro para a esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        {/* Sombra leve na parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* CONTEÚDO ALINHADO À ESQUERDA */}
      <div className="relative z-10 w-full px-5 md:px-6 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-9 lg:col-span-7 text-left flex flex-col items-start">
          
          {/* BADGE COM A BOLINHA PISCANDO */}
          <div className="inline-flex items-center gap-2.5 bg-surface/10 border border-white/15 text-white text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200">Marmitas Feitas no Dia</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.1] drop-shadow-md">
            Sabor caseiro que <br />
            <span className="text-secondary-container">mata a sua fome</span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-lg mb-8 leading-relaxed font-normal">
            Marmitas preparadas diariamente com ingredientes frescos, tempero de casa e aquela porção bem servida do jeito que você gosta.
          </p>

          {/* BOTÕES DE AÇÃO (CTA) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-container text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-secondary-fixed hover:scale-[1.02] active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Pedir pelo Cardápio Online
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>

          {/* PILARES / DIFERENCIAIS RÁPIDOS */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-8 text-white/90 text-xs sm:text-sm">
            <div>
              <p className="font-semibold text-white">Quentinha</p>
              <p className="text-[11px] text-amber-500">Entrega rápida</p>
            </div>
            <div>
              <p className="font-semibold text-white">Caprichada</p>
              <p className="text-[11px] text-amber-500">Porção bem servida</p>
            </div>
            <div>
              <p className="font-semibold text-white">Caseira</p>
              <p className="text-[11px] text-amber-500">Tempero de verdade</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}