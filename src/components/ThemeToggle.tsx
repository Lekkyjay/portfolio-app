import { useEffect, useState } from 'react'
import { FiMoon } from 'react-icons/fi'
import { GoSun } from "react-icons/go";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    }
    else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } 
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(prev => !prev)}>
      {darkMode ? <GoSun className='text-3xl cursor-pointer' /> : <FiMoon className='text-3xl cursor-pointer' /> }
    </button>
  )
}