export default function Hero() {
  return (
    <section id="platform" aria-labelledby="hero-title" className="bg-stone-50 text-emerald-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest text-emerald-800">VERİLERİNİZ BİR ARADA</p>
          <h1 id="hero-title" className="mx-auto mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">İşinizin büyük resmini görün.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Bussion ile verilerinizi tek platformda buluşturun.
            İşinizin performansını takip edin, değişimleri fark edin ve
            bir sonraki adımınızı güvenle planlayın.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:iletisim@ideateknoloji.com?subject=Bussion%20demo" className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-900 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800">Demo iste ↗</a>
          </div>
        </div>
        <div className="mt-12 grid gap-6 border-t border-stone-200 pt-7 sm:grid-cols-3 sm:gap-8 lg:mt-14">
          <div>
            <h2 className="text-base font-semibold">Verilerinizi birleştirin</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Farklı kaynaklardaki bilgileri bir araya getirerek işinizi bir bütün olarak değerlendirin.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Raporlarınızı sadeleştirin</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Önemli göstergeleri anlaşılır raporlarla takip edin, ayrıntılarda kaybolmadan sonuca ulaşın.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Ekibinizle aynı noktadan bakın</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Ortak veriler üzerinden çalışın, içgörülerinizi paylaşın ve kararlarınızı birlikte şekillendirin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
