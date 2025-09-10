export const metadata = { title: "Услуги — Бухгалтер онлайн" };

const categories = [
  { slug: "outsourcing", title: "Бухгалтерское обслуживание / аутсорсинг", desc: "Полный цикл учёта, отчётность, зарплата, сопровождение проверок." },
  { slug: "catering", title: "Общепит", desc: "Калькуляции блюд, склады, касса, отчётность без штрафов." },
  { slug: "marketplaces", title: "Маркетплейсы", desc: "Комиссии и отчёты площадок, возвраты, выбор режима налогообложения." },
  { slug: "logistics", title: "Логистика и перевозки", desc: "Учёт рейсов, ГСМ, амортизация, зарплата и налоги." },
  { slug: "audit", title: "Экспресс-аудит учёта", desc: "Проверка первички, налогов и отчётности. План исправлений." },
  { slug: "registration", title: "Регистрация / ликвидация", desc: "ИП/ООО «под ключ», подбор режима, подготовка документов." },
  { slug: "3-ndfl", title: "3-НДФЛ и вычеты", desc: "Декларации для физлиц и инвесторов, отчёты брокеров." },
  { slug: "consulting", title: "Консалтинг и правовые вопросы", desc: "Договоры, учётная политика, автоматизация 1С." },
];

export default function Services() {
  return (
    <section className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold">Услуги</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
        Онлайн-сопровождение ИП и ООО: от постановки учёта и заработной платы до сдачи отчётности и отраслевых задач.
      </p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(c => (
          <a key={c.slug} href={`/services/${c.slug}`} className="card block hover:shadow-lg transition-shadow">
            <h3 className="font-medium">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{c.desc}</p>
            <span className="mt-4 inline-block text-blue-600 dark:text-blue-400">Подробнее →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
