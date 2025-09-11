'use client';
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

type Message = {
  id: string;
  body: string;
  createdAt: string;
  sender?: { email:string };
  recipient?: { email:string };
};

export default function Messages() {
  const { data: session, status } = useSession();
  const [inbox, setInbox] = useState<Message[]>([]);
  const [sent, setSent] = useState<Message[]>([]);
  const [toEmail, setToEmail] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  async function load() {
    const res = await fetch('/api/messages', { cache: 'no-store' });
    if(!res.ok){ setError('Ошибка загрузки'); return; }
    const data = await res.json();
    setInbox(data.inbox || []);
    setSent(data.sent || []);
  }

  useEffect(()=>{ if(status==='authenticated') load(); },[status]);

  async function send() {
    setLoading(true); setError(null);
    const res = await fetch('/api/messages', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ toEmail, body }) });
    setLoading(false);
    if(!res.ok){ const d = await res.json(); setError(d.error || 'Ошибка'); return; }
    setBody('');
    load();
  }

  if(status==='loading') return <main className="py-12 max-w-3xl mx-auto">Загрузка…</main>;
  if(status!=='authenticated') return <main className="py-12 max-w-3xl mx-auto"><p>Войдите, чтобы посмотреть сообщения.</p><a className="text-blue-600" href="/auth/login">Войти</a></main>;

  return (
    <main className="py-12 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Сообщения</h1>
        <button onClick={()=>signOut({callbackUrl:'/'})} className="text-sm px-3 py-1 rounded-lg border">Выйти</button>
      </div>

      <div className="mt-6 card">
        <h3 className="font-medium">Написать сообщение</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          <input className="p-3 rounded-xl border bg-transparent" placeholder="Email получателя" value={toEmail} onChange={e=>setToEmail(e.target.value)} />
          <input className="md:col-span-2 p-3 rounded-xl border bg-transparent" placeholder="Текст сообщения" value={body} onChange={e=>setBody(e.target.value)} />
        </div>
        <button disabled={loading} onClick={send} className="mt-3 px-5 py-3 rounded-xl bg-blue-600 text-white">{loading?'Отправляю…':'Отправить'}</button>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-medium">Входящие</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {inbox.map(m=>(
              <li key={m.id} className="p-3 rounded-lg border">
                <div className="text-xs text-neutral-500">от {m.sender?.email} • {new Date(m.createdAt).toLocaleString()}</div>
                <div className="mt-1">{m.body}</div>
              </li>
            ))}
            {inbox.length===0 && <li className="text-neutral-500">Пусто</li>}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-medium">Отправленные</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {sent.map(m=>(
              <li key={m.id} className="p-3 rounded-lg border">
                <div className="text-xs text-neutral-500">для {m.recipient?.email} • {new Date(m.createdAt).toLocaleString()}</div>
                <div className="mt-1">{m.body}</div>
              </li>
            ))}
            {sent.length===0 && <li className="text-neutral-500">Пусто</li>}
          </ul>
        </div>
      </div>
    </main>
  );
}
