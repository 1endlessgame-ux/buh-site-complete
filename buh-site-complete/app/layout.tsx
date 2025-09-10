import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бухгалтер онлайн — [Твоё имя]",
  description: "Учёт, зарплата, отчётность, консультации. 1С, удалённая работа, понятные регламенты.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Бухгалтер онлайн — [Твоё имя]", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
        <div className="gradient fixed inset-0 -z-10" />
        <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">[Твоё имя] — бухгалтер</a>
            <div className="flex gap-6 text-sm">
              <a href="/services">Услуги</a>
              <a href="/pricing">Тарифы</a>
              <a href="/#about">Обо мне</a>
              <a href="/#contact" className="px-3 py-1 rounded-lg bg-blue-600 text-white">Консультация</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} [Твоё имя]. Бухгалтерские услуги.
        </footer>
      </body>
    </html>
  );
}
