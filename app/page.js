"use client"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li> vercel env {process.env.VERCEL_ENV}  </li>
        <li> env var {process.env.ENV_VAR} </li>
        <li> New Feature </li>
        <li>test</li>
      </ul>
    </main>
  );
}
