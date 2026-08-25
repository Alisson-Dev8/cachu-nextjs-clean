import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 text-on-surface">
      <div className="max-w-md text-center">
        <h1 className="text-display-lg text-primary-container">404</h1>
        <h2 className="mt-4 text-title-lg text-on-surface">Página não encontrada</h2>
        <p className="mt-2 text-body-md text-on-surface-variant">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-6 py-3 text-label-bold text-on-primary hover:bg-primary transition-colors"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}
