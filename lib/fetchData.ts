export async function fetchData(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return `Server Time: ${new Date().toISOString()}`;
}