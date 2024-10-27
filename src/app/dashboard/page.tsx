import Header from "@/components/Header"
import { ExpandableCardDemo } from "@/components/ExpandCards"

import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <div className="mx-6 flex flex-col gap-10">
      <Header />
      <h1 className="mx-10 font-space text-7xl font-bold text-light selection:text-dark selection:bg-light">Dashboard</h1>
      <div className="mx-10 flex flex-row gap-10 min-h-[70vh] mb-10">
        <div className="flex flex-col items-start border-4 rounded-lg p-10 border-light gap-20 flex-1">
          <div className="flex flex-row items-center w-full">
            <h2 className="font-space text-5xl font-semibold text-light selection:text-dark selection:bg-light mr-auto">Borrow</h2>
            <Link href="/dashboard/borrow" className="font-space text-4xl font-semibold text-light hover:-translate-y-[0.15rem] active:translate-y-[0.15rem] duration-150"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
          </div>
          <div className="flex flex-col gap-20 w-full">
            <div className="flex flex-col gap-4">
              <h3 className="font-space text-3xl ml-2 text-light selection:text-dark selection:bg-light">Wallet Address</h3>
              <input type="text" className="bg-light text-dark text-xl font-space font-bold outline-none rounded-xl w-full p-4 selection:text-light selection:bg-dark"/>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-space text-3xl ml-2 text-light selection:text-dark selection:bg-light">Amount of Token</h3>
              <div className="flex items-center">
                <input type="number" className="bg-light text-dark text-xl font-space font-bold outline-none rounded-l-xl w-full py-4 pl-4 selection:text-light selection:bg-dark -mr-2"/>
                <span className="ml-2 text-dark bg-light font-bold text-xl font-space py-4 pl-3 pr-6 rounded-r-xl select-none">ALPH</span>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[6vh]">
              <button className="select-none font-space text-2xl font-normal border-2 border-light text-light px-4 py-2 rounded-md duration-200 hover:font-bold hover:text-dark hover:bg-light active:bg-accent active:border-accent">Send Request<span className="[word-spacing:0.2rem]"> <FontAwesomeIcon icon={faPaperPlane} /></span></button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start border-4 rounded-lg p-10 gap-16 border-light flex-1">
          <div className="flex flex-row items-center w-full">
            <h2 className="font-space text-5xl font-semibold text-light selection:text-dark selection:bg-light mr-auto">Lend</h2>
            <Link href="/dashboard/lend" className="font-space text-4xl font-semibold text-light hover:-translate-y-[0.15rem] active:translate-y-[0.15rem] duration-150"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
          </div>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  )
}
export default Dashboard