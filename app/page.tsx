import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ваш бухгалтер онлайн: учёт, отчётность и налоги “под ключ”
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300">
            Веду бухгалтерский, налоговый и кадровый учёт. Рассчитываю зарплату и взносы, сдаю отчётность вовремя.
            Помогаю выбрать систему налогообложения и снизить риски. Работаю с ИП и ООО.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white">Получить консультацию</a>
            <a href="/services" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/10">Посмотреть услуги</a>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>• Всегда на связи: мессенджеры, почта, созвоны</li>
            <li>• Прозрачные регламенты и отчётность</li>
            <li>• 1С, Контур, ЭДО</li>
            <li>• Работаю со всеми спецрежимами</li>
          </ul>
        </div>

        {/* Фото — замените на деловой портрет */}
        <div className="justify-self-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
            <Image src="/images/profile.jpg" alt="Фото бухгалтера" fill priority className="object-cover" />
          </div>
          <p className="mt-3 text-xs text-neutral-500 text-center">Положите своё фото в деловом стиле в /public/images/profile.jpg</p>
        </div>
      </section>

      {/* УСЛУГИ превью */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Ключевые услуги</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:"Бухгалтерское обслуживание / аутсорсинг",d:"Полный цикл учёта, отчётность, зарплата, сопровождение проверок."},
            {t:"Общепит",d:"Калькуляции, склады, касса, отчётность без штрафов."},
            {t:"Маркетплейсы",d:"Комиссии и отчёты площадок, возвраты, налоги, автоматизация."},
            {t:"Логистика",d:"Рейсы, ГСМ, амортизация, зарплата и налоги."},
            {t:"Экспресс-аудит",d:"Проверка первички, налогов и отчётности — план исправлений."},
            {t:"Регистрация/ликвидация",d:"ИП/ООО «под ключ», режим налогообложения, документы."},
          ].map((s)=>(
            <div key={s.t} className="card">
              <h3 className="font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.d}</p>
              <a href="/services" className="mt-4 inline-block text-blue-600 dark:text-blue-400">Подробнее →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ОБО МНЕ */}
      <section id="about" className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Обо мне</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-medium">Образование и бэкграунд</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Финансовый колледж</li>
              <li>• Университет экономики и предпринимательства МИЭМП</li>
              <li>• Курсы по 1С: настройка учётной политики, обмен с банками, формы отчётности</li>
              <li>• Повышение квалификации: налоговая практика, ЭДО, процессы МСБ</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-medium">Как работаю</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Краткий экспресс-аудит и план работ</li>
              <li>• Фиксированные точки контроля и дедлайны</li>
              <li>• Понятные отчёты и регулярная коммуникация</li>
              <li>• Внедрение/поддержка 1С и онлайн-сервисов</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="contact" className="py-12 md:py-16">
        <div className="card">
          <h2 className="text-2xl font-semibold">Нужен надёжный бухгалтер?</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Опишите задачу — отвечу в тот же день.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" action="https://formspree.io/f/your-id" method="POST">
            <input className="p-3 rounded-xl border bg-transparent" name="name" placeholder="Имя" required />
            <input className="p-3 rounded-xl border bg-transparent" name="contact" placeholder="Телеграм или телефон" required />
            <input className="md:col-span-2 p-3 rounded-xl border bg-transparent" name="email" type="email" placeholder="E-mail" />
            <select className="p-3 rounded-xl border bg-transparent" name="type">
              <option>ИП</option><option>ООО</option><option>Самозанятый</option>
            </select>
            <select className="p-3 rounded-xl border bg-transparent" name="tax">
              <option>УСН</option><option>ОСНО</option><option>ПСН</option><option>НПД</option>
            </select>
            <textarea className="md:col-span-2 p-3 rounded-xl border bg-transparent" name="msg" rows={4} placeholder="Кратко о задаче"></textarea>
            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-blue-600 text-white">Отправить заявку</button>
          </form>
          <p className="mt-3 text-xs text-neutral-500">Подставьте свой Formspree/Backend эндпоинт в атрибут action.</p>
        </div>
      </section>
    </>
  );
}
