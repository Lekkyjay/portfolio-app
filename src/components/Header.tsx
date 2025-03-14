import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'
import * as motion from 'motion/react-client'

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-11/12 max-w-3xl mx-auto text-center h-screen">
      <motion.div 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src="/images/profile.jpg" alt="profile" className="rounded-full" width={160} height={160} />        
      </motion.div>
      <motion.h3 
        initial={{ y: -20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Lekan Junaid
      </motion.h3>
      <motion.h1 
        initial={{ y: -30, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">FullStack Web Developer based in Budapest
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo">
        I'm a fullstack developer with a passion for creating beautiful and functional web applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact" 
          className="flex items-center gap-3 px-10 py-3 border border-white rounded-full bg-black text-white dark:bg-transparent">
          Contact me <GoArrowUpRight />
        </motion.a>
        {/* <motion.a 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/cv-junaid.pdf" download className="flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full dark:bg-white dark:text-black">
          My Resume <GoArrowUpRight />
        </motion.a> */}
      </div>
    </div>
  )
}