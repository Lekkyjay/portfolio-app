'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { FiMoon } from 'react-icons/fi'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false)

  const mobileMenuRef = useRef<HTMLUListElement | null>(null)
  
  const openMenu = () => {
    (mobileMenuRef.current as HTMLUListElement).style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    (mobileMenuRef.current as HTMLUListElement).style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false)
    })  
  }, [])
  

  return (
    <>
      <div className="fixed top-0 right-0 left-0 h-80 -z-10 bg-gradient-to-b from-red-100 to-transparent translate-y-[-50%] dark:hidden"></div>
      <nav className={`flex justify-between items-center w-full fixed z-50 px-5 lg:px-8 xl:px-[8%] py-4 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <Link href="#top">
          <span className='text-3xl font-bold tracking-wider'>Lekan</span> 
          <span className='text-4xl font-bold text-red-500'>.</span>
        </Link>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
          <li>
            <Link href="#top">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className='flex items-center gap-5'>
          <ThemeToggle />
          <Link href="#contact" className='hidden lg:flex items-center gap-3 rounded-full px-10 py-3 ml-4 border border-gray-500 dark:border-white/50'>
            Contact <GoArrowUpRight />
          </Link>
          <button className='block md:hidden' onClick={openMenu}>
            <RiMenu3Line className='text-3xl cursor-pointer' />
          </button>
        </div>        
        
        <ul ref={mobileMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover transition duration-500">
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <RiCloseLine className="text-3xl cursor-pointer" />
          </div>
          <li>
            <Link href="#top" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="#about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="#services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link href="#projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}