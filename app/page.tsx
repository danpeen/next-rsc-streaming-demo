import { Suspense } from 'react';
import { fetchData } from '../lib/fetchData';

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