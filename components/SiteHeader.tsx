"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjblBTWBOMOP995lYZ4D_ivR4lC4NobSvevMfdLAqqkyi9erCODOrOU6jSFaj5J2Lu5YHaNTSZECAe8TzFapZmLqggjim0wm91ZKkCcZv1G0LN2Xfs1KtfbvtZnsXXSgjk4vcBbNfpJ-XvqZOLxiBYTLxv6VaZe7L0bA2CpZr0DXw4-Xq-dg65gRa_hnqSc1bUMzGHOe3eJcYByu5COtJUI8RJ8_ze_0jVJV2WM9MWAGXxpg0e-ztANyQ01jGwffmNsw";

const NAV = [
  { href: "#hero", label: "Início" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Nossa História" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex items-center justify-between px-5 md:px-6 max-w-[1280px] mx-auto h-16 md:h-20">
        
        {/* LOGO NA ESQUERDA */}
        <a href="#hero" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`${SITE.name} logo`}
            className="h-12 md:h-16 w-auto object-contain rounded-lg"
            src={LOGO_URL}
          />
          <span className="text-title-md md:text-title-lg font-bold text-primary tracking-tight hidden md:block">
            {SITE.name}
          </span>
        </a>

        {/* BLOCO DA DIREITA: NAV + BOTÃO WHATSAPP */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* LINKS DE NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-on-surface hover:text-secondary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* BOTÃO WHATSAPP */}
          <a
            href={SITE.whatsappUrl || SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 inline-flex items-center gap-2"
          >
            {/* ÍCONE DO WHATSAPP */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp
          </a>

          {/* BOTÃO HAMBÚRGUER MOBILE COM ANIMAÇÃO */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden p-2 text-on-surface hover:text-secondary active:scale-90 transition-transform duration-200 focus:outline-none rounded-lg"
            aria-label="Alternar menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE COM TRANSIÇÃO SUAVE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface border-b border-outline-variant/30 ${
          isMenuOpen
            ? "max-h-60 opacity-100 px-5 pt-3 pb-6 space-y-3"
            : "max-h-0 opacity-0 px-5 py-0"
        }`}
      >
        <nav className="flex flex-col gap-3 text-sm font-medium">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-on-surface hover:text-secondary py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}