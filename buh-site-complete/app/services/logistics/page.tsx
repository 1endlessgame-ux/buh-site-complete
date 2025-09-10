export const metadata = { title: "Логистика и перевозки — Услуги" };

const bullets = ["Учёт рейсов, путевые листы и нормы расхода", "ГСМ, ремонт, амортизация", "Расчёт зарплаты, командировки и суточные", "Налоги и отчётность вовремя", "Первичка и сверки с заказчиками"];

export default function Page() {
  return (
    <section className="py-12 md:py-16">
      <a href="/services" className="text-sm text-blue-600 dark:text-blue-400">← Ко всем услугам</a>
      <h1 className="mt-2 text-3xl font-semibold">Логистика и перевозки</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
        Учет рейсов, ГСМ и зарплаты водителей — без потерь и просрочек.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-medium">Что входит</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            {bullets.map((b,i)=>(<li key={i}>• {b}</li>))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-medium">Результат для вас</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li>• Понятный регламент и сроки закрытия месяца</li>
            <li>• Снижение рисков штрафов и блокировок</li>
            <li>• Прозрачная картина денег и налогов</li>
          </ul>
          <a href="/pricing" className="mt-4 inline-block text-blue-600 dark:text-blue-400">Смотреть тарифы →</a>
        </div>
      </div>

      <div className="mt-8 card">
        <h3 className="font-medium">Готовы обсудить задачу?</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Заполните форму — отвечу в тот же день.</p>
        <a href="/#contact" className="mt-4 inline-block px-5 py-3 rounded-xl bg-blue-600 text-white">Оставить заявку</a>
      </div>
    </section>
  );
}
