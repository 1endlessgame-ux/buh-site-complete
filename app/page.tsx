import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ваш бухгалтер онлайн: учёт, отчётность и налоги “под ключ”
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300">
            Веду бухгалтерский, налоговый и кадровый учёт. Рассчитываю зарплату и взносы, сдаю отчётность вовремя.
            Помогаю выбрать режим налогообложения и снизить риски. Работаю с ИП и ООО.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white">Получить консультацию</a>
            <a href="/services" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/10">Посмотреть услуги</a>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
            <Image src="/images/hero-money.jpg" alt="Финансы и бухгалтерия" fill priority className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
