import { SITE } from "@/lib/site";

const MENU_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4qhdf5loWfc53swUZml9f6Fl3s5tHxfCGOzbeSjdA7jMIhkAxckKcj4ys0FnOP8icLAu94FEAENOq314w-odSDPEJSh6SZ2eTmlXr-lbQWjrE-01_HQrg0gWj0K8NnrkSOGjp4IfODjLKAKYoz01E-3_-Gu87o7ANaQbf9N1gLYgvF8djZ2DopNXxB3S7kmmRMwn1KgDGpUPJGqPUW-DEgvUpcjqlLp0WA6saxMr4b92Sm2a86qj";

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

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-6 text-center">
        <h2 className="text-headline-lg text-primary-container">Nosso Cardápio</h2>
        <p className="text-body-lg text-on-surface-variant mt-4 max-w-xl mx-auto">
          Confira todas as marmitas e opções do dia no nosso cardápio online e faça seu pedido.
        </p>
        <div className="mt-10">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-container text-on-primary text-label-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary hover:scale-105 transition-all duration-300"
          >
            Ver Cardápio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
