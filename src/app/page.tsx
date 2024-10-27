import Link from "next/link";

export default function Home() {
  return (
    <div className="select-none flex flex-col gap-14 h-screen items-center justify-center">
      <h1 className="font-pixel text-9xl font-semibold text-light text-center px-2 pb-2.5 rounded-xl border-4 border-light border-dotted">alphxium</h1>
      <div className="flex flex-col items-center gap-2 font-space text-4xl font-medium text-light text-center">
        <h2>The <span className="font-bold">DeFi</span> platform for</h2>
        <h2 className="underline">borrowing and lending</h2>
        <h2 className="font-pixel font-semibold">cryptocurrency</h2>
      </div>
      <div className="flex flex-row gap-10 mt-10 items-center">
        <Link href="/dashboard" className="font-space text-2xl font-normal border-2 border-light text-light px-4 py-1.5 rounded-md duration-200 hover:font-bold hover:text-dark hover:bg-light active:scale-105">Connect Wallet</Link>
        <span className="text-light text-3xl animate-bounce">&#9829;</span>
        <a href="" target="_blank" className="font-space text-2xl font-normal border-2 border-light text-light px-4 py-1.5 rounded-md duration-200 hover:font-bold hover:text-dark hover:bg-light active:scale-105">Check Out Repo</a>
      </div>
      <footer className="fixed bottom-2 font-space text-xl font-medium text-light text-center">Built on <a href="https://alephium.org/" target="_blank" className="hover:underline">alephium</a></footer>
    </div>
  );
}
