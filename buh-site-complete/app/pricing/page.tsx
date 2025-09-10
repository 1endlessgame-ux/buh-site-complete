export const metadata = { title: "Тарифы — Бухгалтер онлайн" };

type Plan = {
  name: string;
  price: string;
  best?: boolean;
  features: string[];
  note?: string;
};

const plans: Plan[] = [
  {
    name: "Start",
    price: "от 8 900 ₽/мес",
    features: [
      "До 40 операций в месяц",
      "Отчётность и расчёт налогов",
      "Зарплата до 3 сотрудников",
      "Консультации — 1 час/мес"
    ]
  },
  {
    name: "Standard",
    price: "от 14 900 ₽/мес",
    best: true,
    features: [
      "До 100 операций в месяц",
      "Зарплата до 7 сотрудников",
      "Кадровый учёт",
      "Сверки с контрагентами",
      "Консультации — 2 часа/мес"
    ],
    note: "Подходит большинству ИП/ООО на УСН"
  },
  {
    name: "Pro",
    price: "от 24 900 ₽/мес",
    features: [
      "До 200 операций в месяц",
      "Зарплата до 15 сотрудников",
      "Пояснения в ФНС",
      "Помощь при камеральных проверках",
      "Консультации — 4 часа/мес"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold">Тарифы</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
        Ниже — ориентировочная сетка. Итоговая стоимость зависит от системы налогообложения, количества операций и сотрудников.
        Оставьте заявку — рассчитаю персонально.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`card ${p.best ? "ring-2 ring-blue-600" : ""}`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.best && <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">Популярно</span>}
            </div>
            <div className="mt-2 text-2xl">{p.price}</div>
            {p.note && <div className="mt-1 text-xs text-neutral-500">{p.note}</div>}
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              {p.features.map((f,i)=>(<li key={i}>• {f}</li>))}
            </ul>
            <a href="/#contact" className="mt-6 inline-block px-4 py-2 rounded-lg bg-blue-600 text-white">Обсудить проект</a>
          </div>
        ))}
      </div>

      <div className="mt-8 card">
        <h3 className="font-medium">Дополнительно</h3>
        <ul className="mt-2 grid md:grid-cols-2 gap-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>• Постановка/восстановление учёта — по оценке</li>
          <li>• Разовые консультации — от 2 000 ₽/час</li>
          <li>• Подключение ЭДО/банка/1С — по оценке</li>
          <li>• 3-НДФЛ — от 3 500 ₽ за декларацию</li>
        </ul>
      </div>
    </section>
  );
}
