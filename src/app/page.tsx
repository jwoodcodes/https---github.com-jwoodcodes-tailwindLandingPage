import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-zinc-100 min-h-screen">
      <nav className="flex w-full p-3 justify-center text-lg tracking-wider bg-slate-950 text-amber-400">
        <Link href={"/"}>Products</Link>
      </nav>
      <h1 className="text-teal-600 text-2xl tracking-wide sp m-auto">
        Landing Page
      </h1>
    </main>
  );
}
