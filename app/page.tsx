import { Suspense } from 'react';
import { fetchData } from '../lib/fetchData';

// 强制页面动态渲染，避免在构建时预渲染
export const dynamic = 'force-dynamic';

async function SlowContent() {
  const data = await fetchData();
  return <p className="text-green-700">✅ Loaded: {data}</p>;
}

export default function Page() {
  return (
    <main className="p-6 font-mono">
      <h1 className="text-xl font-bold mb-4">🧪 Streaming + RSC + Cache Demo</h1>

      <Suspense fallback={<p className="text-gray-400">⏳ Loading slow content...</p>}>
        <SlowContent />
      </Suspense>
    </main>
  );
}