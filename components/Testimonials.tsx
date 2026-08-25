"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  {
    initial: "M",
    name: "Mariana Silva",
    role: "Cliente da Vila Margarida",
    quote:
      "Peço quase toda semana. A marmita chega quentinha, com gosto de comida de casa mesmo. Arroz e feijão sempre no ponto certo.",
    rating: 5,
  },
  {
    initial: "R",
    name: "Roberto Almeida",
    role: "Cliente Frequente",
    quote:
      "Faço meu pedido pelo cardápio online no caminho do trabalho e retiro rapidinho. Porção generosa e preço justo pra quem almoça fora todo dia.",
    rating: 5,
  },
  {
    initial: "C",
    name: "Camila Souza",
    role: "Cliente do Bairro",
    quote:
      "O melhor da região pra marmita caseira. Sempre fresquinha, sem parecer requentada, e o atendimento é bem atencioso.",
    rating: 5,
  },
  {
    initial: "L",
    name: "Lucas Ferreira",
    role: "Trabalha na Região",
    quote:
      "A entrega é surpreendentemente rápida na hora do almoço. Comida bem temperada, sem excesso de óleo. Nota 10!",
    rating: 5,
  },
  {
    initial: "A",
    name: "Ana Paula Mendes",
    role: "Cliente Semanal",
    quote:
      "A feijoada de quarta e sábado é imbatível! Dá pra ver o capricho em cada embalagem. Super recomendo.",
    rating: 5,
  },
  {
    initial: "F",
    name: "Fernando Costa",
    role: "Cliente Frequente",
    quote:
      "Salvou meus almoços durante a semana. Opções variadas e a porção é perfeita para quem tem bastante fome.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotação automática a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  // Função para pegar os 3 depoimentos visíveis sequenciais
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(REVIEWS[(currentIndex + i) % REVIEWS.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 max-w-[1280px] mx-auto border-t border-outline-variant/20">
      
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
            Experiências
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-container mt-1 tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        {/* CONTROLES / BOTÕES DE NAVEGAÇÃO NO TOPO */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Anterior"
            className="w-10 h-10 rounded-full bg-surface border border-outline-variant/40 text-on-surface hover:bg-secondary-container hover:text-on-secondary-container flex items-center justify-center transition-all active:scale-90"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            type="button"
            aria-label="Próximo"
            className="w-10 h-10 rounded-full bg-surface border border-outline-variant/40 text-on-surface hover:bg-secondary-container hover:text-on-secondary-container flex items-center justify-center transition-all active:scale-90"
          >
            ›
          </button>
        </div>
      </div>

      {/* GRID COM 3 CARDS VISÍVEIS (NO DESKTOP) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getVisibleReviews().map((review, idx) => (
          <div
            key={`${review.name}-${idx}`}
            className="bg-surface-container/60 border border-outline-variant/30 p-6 md:p-8 rounded-2xl relative flex flex-col justify-between hover:shadow-md transition-all duration-500 ease-in-out"
          >
            {/* ASPAS NO FUNDO */}
            <div className="absolute top-4 right-6 text-on-surface-variant/10 font-serif text-6xl select-none leading-none pointer-events-none">
              “
            </div>

            <div>
              {/* ESTRELAS */}
              <div className="flex text-amber-400 text-xs mb-4 gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* FRASE */}
              <p className="text-xs sm:text-sm text-on-surface/90 leading-relaxed italic mb-6 relative z-10">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>

            {/* AUTOR */}
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/15">
              <div className="w-10 h-10 rounded-full bg-secondary-container/80 text-on-secondary-container flex items-center justify-center font-bold text-sm shrink-0">
                {review.initial}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-on-surface leading-snug">
                  {review.name}
                </h3>
                <p className="text-[11px] text-on-surface-variant">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INDICADORES (DOTS) */}
      <div className="flex justify-center gap-2 mt-8">
        {REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            type="button"
            aria-label={`Ir para depoimento ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-secondary-container"
                : "w-2 bg-on-surface-variant/20 hover:bg-on-surface-variant/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}