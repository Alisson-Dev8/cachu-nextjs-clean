"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 text-on-surface">
      <div className="max-w-md text-center">
        <h1 className="text-title-lg text-on-surface">Essa página não carregou</h1>
        <p className="mt-2 text-body-md text-on-surface-variant">
          Algo deu errado do nosso lado. Você pode tentar de novo ou voltar para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-6 py-3 text-label-bold text-on-primary hover:bg-primary transition-colors"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-outline px-6 py-3 text-label-bold text-on-surface hover:bg-surface-container transition-colors"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
