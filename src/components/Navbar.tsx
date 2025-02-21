import Image from 'next/image'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'
import { FiMoon } from 'react-icons/fi'
import NavbarMobile from './NavbarMobile'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full fixed z-50 px-5 lg:px-8 xl:px-[8%] py-4">
      <a href="#top">
        <Image src="/globe.svg" alt="logo" className="cursor-pointer mr-14" width={50} height={50} />
      </a>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
        <li>
          <Link href="#top">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className='flex items-center gap-5 mr-12 md:mr-6'>
        <button>
          <FiMoon className='text-3xl cursor-pointer' />
        </button>
        <Link href="#contact" className='hidden lg:flex items-center gap-3 rounded-full px-10 py-3 border border-gray-500'>
          Contact <GoArrowUpRight />
        </Link>
      </div>        

      <NavbarMobile />
    </nav>
  )
}