export default function Hero() {
  return (
    <section id="platform" aria-labelledby="hero-title" className="bg-stone-50 text-emerald-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-widest text-emerald-800">VERİLERİNİZ BİR ARADA</p>
          <h1 id="hero-title" className="mt-5 max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">İşinizin büyük resmini görün.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Veriden içgörüye, tek platformda. İşinizi daha iyi anlayın,
            bir sonraki adımınızı güvenle atın.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" disabled className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-900 px-6 py-3 text-sm font-medium text-white">Demo iste</button>
          </div>
        </div>
      </div>
    </section>
  );
}
