import { SITE } from "@/lib/site";

const MENU_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4qhdf5loWfc53swUZml9f6Fl3s5tHxfCGOzbeSjdA7jMIhkAxckKcj4ys0FnOP8icLAu94FEAENOq314w-odSDPEJSh6SZ2eTmlXr-lbQWjrE-01_HQrg0gWj0K8NnrkSOGjp4IfODjLKAKYoz01E-3_-Gu87o7ANaQbf9N1gLYgvF8djZ2DopNXxB3S7kmmRMwn1KgDGpUPJGqPUW-DEgvUpcjqlLp0WA6saxMr4b92Sm2a86qj";

const NEWS = [
  {
    title: "Embalagem nova",
    description:
      "Marmitas ainda mais bem apresentadas, práticas para levar e com aquele cuidado que combina com comida feita no dia.",
  },
  {
    title: "Docinhos no cardápio",
    description:
      "Agora também tem bolo e brownie para fechar o almoço com uma sobremesa caprichada.",
  },
  {
    title: "Marmita fit",
    description:
      "Uma opção mais leve para quem quer manter a rotina sem abrir mão de uma refeição saborosa.",
  },
  {
    title: "Gelatos",
    description:
      "Novidade geladinha para adoçar o dia e deixar a pausa do almoço ainda melhor.",
  },
] as const;

export function MenuHighlights() {
  return (
    <section id="menu" className="relative bg-surface-container-low section-padding overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MENU_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/95 to-surface-container-low/70" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="text-center">
          <span className="text-label-bold text-secondary tracking-widest uppercase">
            Novidades
          </span>
          <h2 className="text-headline-lg text-primary-container mt-3">
            Tem coisa boa chegando no Cachu
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Além das marmitas feitas no dia, o cardápio ganhou embalagem nova, sobremesas,
            marmita fit e gelatos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {NEWS.map((item) => (
            <article
              key={item.title}
              className="bg-surface/90 border border-outline-variant rounded-lg p-6 text-left shadow-sm backdrop-blur-sm"
            >
              <div className="h-1.5 w-12 rounded-full bg-secondary-container mb-5" />
              <h3 className="text-title-lg text-primary-container">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant mt-3">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="text-body-md text-on-surface-variant mt-10 max-w-xl mx-auto text-center">
          Confira a disponibilidade do dia pelo cardápio online ou chame no WhatsApp.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-container text-on-primary text-label-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary hover:scale-105 transition-all duration-300 text-center"
          >
            Ver Cardápio Completo
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary-container text-primary-container text-label-bold px-10 py-4 rounded-full hover:bg-primary-container hover:text-on-primary transition-colors duration-300 text-center"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}