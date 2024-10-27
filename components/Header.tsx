import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-6 px-10 py-5 rounded-[30px] bg-accent select-none">
      <div className="flex flex-row items-center gap-2">
        <Image className="h-12 rounded-lg border-2 border-dark" src="https://raw.githubusercontent.com/skarwuuu/alph-xium/refs/heads/main/app/favicon.ico?token=GHSAT0AAAAAACYQJT5FBDPHUJV5D6IGKB4AZY62GAQ" alt="logo" />
        <Link href="/"><h1 className="font-pixel text-5xl font-semibold text-dark text-center">alphxium</h1></Link>
      </div>
      <div>
        <button className="font-space text-2xl font-normal border-2 border-dark text-dark px-3.5 py-2 rounded-full duration-200 hover:font-bold hover:text-accent hover:bg-dark active:scale-105">Wallet</button>
      </div>
    </div>
  )
}
export default Header