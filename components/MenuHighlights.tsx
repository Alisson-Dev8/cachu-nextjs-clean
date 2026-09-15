import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/lib/site";

const MENU_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4qhdf5loWfc53swUZml9f6Fl3s5tHxfCGOzbeSjdA7jMIhkAxckKcj4ys0FnOP8icLAu94FEAENOq314w-odSDPEJSh6SZ2eTmlXr-lbQWjrE-01_HQrg0gWj0K8NnrkSOGjp4IfODjLKAKYoz01E-3_-Gu87o7ANaQbf9N1gLYgvF8djZ2DopNXxB3S7kmmRMwn1KgDGpUPJGqPUW-DEgvUpcjqlLp0WA6saxMr4b92Sm2a86qj";

const publicFileHasContent = (src: string) => {
  const filePath = join(process.cwd(), "public", src.replace(/^\//, ""));

  return existsSync(filePath) && statSync(filePath).size > 0;
};

const NEWS = [
  {
    title: "Embalagem nova",
    image: "/novidades/embalagem-nova.jpeg",
    imageAlt: "Novas embalagens do Cachu Restaurante com marmitas prontas",
    description:
      "Marmitas ainda mais bem apresentadas, práticas para levar e com aquele cuidado que combina com comida feita no dia.",
  },
  {
    title: "Docinhos no cardápio",
    image: "/novidades/bolo-chocolate.jpeg",
    imageAlt: "Bolo de chocolate no pote do Cachu Restaurante",
    description:
      "Agora também tem bolo, brownie e opções cremosas para fechar o almoço com uma sobremesa caprichada.",
  },
  {
    title: "Marmita fit",
    image: "/novidades/bolo-cenoura.jpeg",
    imageAlt: "Bolo de cenoura com chocolate no pote do Cachu Restaurante",
    description:
      "Uma opção mais leve para quem quer manter a rotina sem abrir mão de uma refeição saborosa.",
  },
  {
    title: "Gelatos",
    image: "/novidades/brownie-frutas.jpeg",
    imageAlt: "Sobremesa gelada com brownie e frutas vermelhas do Cachu Restaurante",
    description:
      "Novidade geladinha para adoçar o dia e deixar a pausa do almoço ainda melhor.",
  },
] as const;

const SWEETS = [
  {
    src: "/novidades/bolo-cenoura.jpeg",
    alt: "Bolo de cenoura com cobertura de chocolate",
  },
  {
    src: "/novidades/brownie-ninho.jpeg",
    alt: "Brownie com creme de ninho",
  },
  {
    src: "/novidades/brownie-frutas.jpeg",
    alt: "Brownie com creme e frutas vermelhas",
  },
] as const;

export function MenuHighlights() {
  const newsWithImageState = NEWS.map((item) => ({
    ...item,
    hasImage: publicFileHasContent(item.image),
  }));
  const sweetsWithFiles = SWEETS.filter((item) => publicFileHasContent(item.src));

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
          {newsWithImageState.map((item) => (
            <article
              key={item.title}
              className="bg-surface/90 border border-outline-variant rounded-lg overflow-hidden text-left shadow-sm backdrop-blur-sm"
            >
              {item.hasImage ? (
                <div className="relative aspect-[4/3] bg-surface-container-high overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <div className="h-1.5 w-12 rounded-full bg-secondary-container mb-5" />
                <h3 className="text-title-lg text-primary-container">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant mt-3">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {sweetsWithFiles.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {sweetsWithFiles.map((item) => (
              <div
                key={item.src}
                className="aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-high shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        ) : null}

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