import Link from "next/link"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between mt-6 px-10 py-5 rounded-[30px] bg-accent select-none">
      <div className="flex flex-row items-center gap-2">
        <img className="h-12 rounded-lg border-2 border-dark" src="https://recru-data.s3.ap-southeast-1.amazonaws.com/user_671799ba61d8465d76262d57/0bc0bed0-9096-11ef-8bf4-d79b93739020.png" alt="logo" />
        <Link href="/"><h1 className="font-pixel text-5xl font-semibold text-dark text-center">alphxium</h1></Link>
      </div>
      <div>
        <button className="font-space text-2xl font-normal border-2 border-dark text-dark px-3.5 py-2 rounded-full duration-200 hover:font-bold hover:text-accent hover:bg-dark active:scale-105">Wallet</button>
      </div>
    </div>
  )
}
export default Header