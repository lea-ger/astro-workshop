export function GET() {
  const random = Math.floor(Math.random() * 5) + 1;
  return new Response(
    JSON.stringify({ available: random }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}