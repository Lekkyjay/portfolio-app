import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-11/12 max-w-3xl mx-auto text-center h-screen">
      <div>
        <Image src="/images/profile.jpg" alt="profile" className="rounded-full" width={160} height={160} />        
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Lekan Junaid</h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">FullStack Web Developer based in Budapest</h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I'm a fullstack developer with a passion for creating beautiful and functional web applications.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link href="#contact" className="flex items-center gap-3 px-10 py-3 border border-white rounded-full bg-black text-white dark:bg-transparent">
          Contact me <GoArrowUpRight />
        </Link>
        <Link href="/nginx.pdf" download className="flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full dark:bg-white dark:text-black">
          My Resume <GoArrowUpRight />
        </Link>
      </div>
    </div>
  )
}