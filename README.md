# Пользователи и сообщения (NextAuth + Prisma)

**Страницы:**  
- Регистрация: `/auth/register`  
- Вход: `/auth/login`  
- Сообщения: `/messages` (после входа)

## Настройка БД (Postgres)
- Подключите Vercel Postgres (Integration) или Neon.
- В переменные окружения проекта (Vercel → Settings → Environment Variables) добавьте:
  - `DATABASE_URL` — строка подключения к Postgres
  - `NEXTAUTH_SECRET` — любая случайная строка
- Выполните миграции локально (`npx prisma migrate dev`) или через CI (`npx prisma migrate deploy`).

## Скрипты
- `npm run dev` — локально
- `npm run build` — сборка
- `npm start` — запуск prod
