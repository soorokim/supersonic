"use client";
import { captureException } from "@sentry/nextjs";

export default function Home() {
  const onClick = () => {
    captureException(new Error(new Date().toDateString()));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={onClick}>test sentry!</button>
    </main>
  );
}
