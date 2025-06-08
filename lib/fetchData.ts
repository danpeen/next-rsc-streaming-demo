// lib/fetchData.ts
export async function fetchData(): Promise<string> {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC', {
    // 告诉 Vercel：缓存这个请求结果 10 秒
    next: { revalidate: 10 },
  });

  if (!res.ok) throw new Error('Failed to fetch');

  const data = await res.json();
  return `Fetched Time (UTC): ${data.datetime}`;
}