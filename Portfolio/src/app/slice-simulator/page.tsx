export default function SliceSimulatorPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-neutral-950 px-6 text-center text-neutral-50">
      <div className="max-w-2xl">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-neutral-500">
          Slice Simulator
        </p>
        <h1 className="my-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          Nenhum slice configurado neste projeto.
        </h1>
        <p className="text-base leading-8 text-neutral-400">
          Esta rota foi mantida apenas para evitar erros do scaffold anterior.
          Se voltares a usar o Prismic Slice Machine, podes substituir esta
          página pela integração do simulador.
        </p>
      </div>
    </main>
  )
}
