import Image from "next/image";
import heroImage from "@/public/images/bussion-insights.png";

export default function Hero() {
  return (
    <section id="platform" aria-labelledby="hero-title" className="bg-stone-50 text-emerald-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-widest text-emerald-800">VERİDEN DAHA FAZLASI</p>
          <h1 id="hero-title" className="mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            Daha akıllı kararlar,<br />
            daha güçlü yarınlar.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Veriden içgörüye, tek platformda. İşinizi daha iyi anlayın,
            bir sonraki adımınızı güvenle atın.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" disabled className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-900 px-6 py-3 text-sm font-medium text-white">Demo iste</button>
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Bussion yazısını ve yeşil finansal grafikleri büyüten bir büyüteç"
          unoptimized
          preload
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}
