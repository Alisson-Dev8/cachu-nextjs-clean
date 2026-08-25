import { SITE } from "@/lib/site";

const FACADE_IMG = "/fachada-cachu.jpeg";

export function About() {
  return (
    <section id="about" className="section-padding px-5 md:px-6 max-w-[880px] mx-auto text-center">
      <div className="relative mx-auto max-w-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FACADE_IMG}
          alt="Fachada do Cachu Restaurante, na Vila Margarida em Campo Grande - MS"
          width={1600}
          height={1200}
          className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl mx-auto"
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-surface-container-highest px-6 py-4 rounded-lg shadow-md text-center">
          <p className="text-label-bold text-secondary uppercase tracking-widest mb-1">
            Funcionamento
          </p>
          <p className="text-title-lg text-primary-container leading-tight">{SITE.hours}</p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center">
        <span className="text-label-bold text-secondary tracking-widest uppercase mb-4">
          Nossa Herança
        </span>
        <h2 className="text-headline-lg text-primary-container mb-6">
          Tradição &amp; Paixão pela Gastronomia
        </h2>
        <p className="text-body-md text-on-surface-variant mb-6 max-w-xl">
          No Cachu Park, acreditamos que cada refeição é uma história contada através de
          sabores, texturas e aromas. Nossa jornada começou com uma simples paixão por
          ingredientes frescos e autênticos.
        </p>
        <p className="text-body-md text-on-surface-variant mb-10 max-w-xl">
          Hoje, mantemos esse espírito vivo em cada prato, combinando técnicas clássicas com um
          toque contemporâneo para proporcionar uma experiência que conforta e surpreende.
        </p>
        <a
          href="#menu"
          className="inline-block border border-primary-container text-primary-container text-label-bold px-8 py-3 rounded-full hover:bg-primary-container hover:text-on-primary transition-colors duration-300"
        >
          Conheça Nossa História
        </a>
      </div>
    </section>
  );
}
