'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { FiMoon } from 'react-icons/fi'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

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
      <div className="fixed top-0 right-0 left-0 h-40 -z-10 bg-gradient-to-b from-red-100 to-transparent translate-y-[-50%]"></div>
      <nav className={`flex justify-between items-center w-full fixed z-50 px-5 lg:px-8 xl:px-[8%] py-4 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
        <a href="#top">
          <Image src="/globe.svg" alt="logo" className="cursor-pointer mr-14" width={50} height={50} />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-md bg-opacity-50'}`}>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className='flex items-center gap-5 mr-10'>
          <button>
            <FiMoon className='text-3xl cursor-pointer' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 rounded-full px-10 py-3 border border-gray-500'>
            Contact <GoArrowUpRight />
          </a>
          <button className='block md:hidden' onClick={openMenu}>
            <RiMenu3Line className='text-3xl cursor-pointer' />
          </button>
        </div>
        
        <ul ref={mobileMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <RiCloseLine className="text-3xl cursor-pointer" />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}