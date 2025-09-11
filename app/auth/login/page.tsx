'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState<string|null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setMsg(null);
    const res = await signIn('credentials', { redirect:false, email, password });
    setLoading(false);
    if(res?.error){ setMsg('Неверный email или пароль'); return; }
    router.push('/messages');
  }

  return (
    <main className="py-12 md:py-16 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Вход</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-3">
        <input className="p-3 rounded-xl border bg-transparent" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="p-3 rounded-xl border bg-transparent" placeholder="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button disabled={loading} className="px-5 py-3 rounded-xl bg-blue-600 text-white">{loading?'Вхожу...':'Войти'}</button>
      </form>
      {msg && <p className="mt-3 text-sm">{msg}</p>}
      <p className="mt-4 text-sm">Нет аккаунта? <a href="/auth/register" className="text-blue-600">Зарегистрироваться</a></p>
    </main>
  );
}
