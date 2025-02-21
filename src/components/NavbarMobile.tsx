'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

export default function NavbarMobile() {
  const mobileMenuRef = useRef<HTMLUListElement | null>(null)

  const openMenu = () => {
    (mobileMenuRef.current as HTMLUListElement).style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    (mobileMenuRef.current as HTMLUListElement).style.transform = 'translateX(16rem)'
  }

  return (
    <>
      <button className='block md:hidden absolute top-6 right-5' onClick={openMenu}>
        <RiMenu3Line className='text-3xl cursor-pointer' />
      </button>
      <ul ref={mobileMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 z-50 h-screen bg-rose-50 transition duration-500">
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
          <Link href="#projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link href="#contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </>
  )
}
