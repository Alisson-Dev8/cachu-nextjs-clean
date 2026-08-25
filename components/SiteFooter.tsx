import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container text-on-primary-container w-full pt-10 md:pt-16 pb-6 text-body-sm">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-5 md:px-6 max-w-[1280px] mx-auto mb-10">
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-title-xl font-bold text-secondary-container mb-1">{SITE.name}</h2>
          
          {/* CNPJ abaixo do nome */}
          <p className="text-on-primary-container/70 text-[11px] mb-3 font-mono">
            CNPJ: {SITE.cnpj}
          </p>

          <p className="text-on-primary-container/80 max-w-xs mb-4 text-xs leading-relaxed">
            Marmitas caseiras feitas no dia, com tempero de casa e porção que mata a fome.
          </p>
          <a
            href="#about"
            className="text-xs font-semibold text-secondary-container hover:text-on-primary transition-colors inline-flex items-center gap-1"
          >
            Nossa História
            <span aria-hidden>→</span>
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-on-primary">Navegação</h3>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <a className="text-on-primary-container/80 hover:text-secondary-container transition-all block" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="text-on-primary-container/80 hover:text-secondary-container transition-all block" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-on-primary-container/80 hover:text-secondary-container transition-all block"
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir Online
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-on-primary">Suporte</h3>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <a
                className="text-on-primary-container/80 hover:text-secondary-container transition-all block"
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="text-on-primary-container/80 hover:text-secondary-container transition-all block"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como Chegar
              </a>
            </li>
            <li>
              <a
            href={`tel:+${SITE.phoneRaw}`}
            className="block text-sm font-semibold text-on-primary hover:text-secondary-container transition-colors mb-4"
          >
            {SITE.phoneDisplay}
          </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-on-primary">Endereço</h3>
          <p className="text-on-primary-container/80 text-xs mb-1">{SITE.addressLine1}</p>
          <p className="text-on-primary-container/80 text-xs mb-6">{SITE.addressLine2}</p>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-on-primary">Horários</h3>
          <p className="text-on-primary-container/80 text-xs mb-1">{SITE.hours}</p>
          <p className="text-on-primary-container/80 text-xs mb-4">{SITE.hoursDom}</p>

          <div className="flex items-center gap-2.5">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Cachu Park"
              className="w-8 h-8 rounded-full border border-on-primary-container/40 flex items-center justify-center text-on-primary-container hover:border-secondary-container hover:text-secondary-container transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Cachu Park"
              className="w-8 h-8 rounded-full border border-on-primary-container/40 flex items-center justify-center text-on-primary-container hover:border-secondary-container hover:text-secondary-container transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.59-1.56h1.7V3.1C15.98 3.03 15 3 13.83 3c-2.44 0-4.11 1.49-4.11 4.22v2.38H7v3.2h2.72V21h3.78z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT COM CNPJ */}
      <div className="px-5 md:px-6 max-w-[1280px] mx-auto pt-6 border-t border-on-primary-container/20 text-center">
        <p className="text-on-primary-container/60 text-[11px]">
          © {new Date().getFullYear()} {SITE.name} • CNPJ {SITE.cnpj}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}