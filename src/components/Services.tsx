import Image from 'next/image'
import Link from 'next/link'
import * as motion from 'motion/react-client'
import { MdArrowForward } from 'react-icons/md'
import { servicesData } from '@/lib/data'

export default function Services() {
  return (
    <motion.div id="services" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >What I offer</motion.h4>
      
      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >My Services</motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am a Full Stack Web Developer with over 5 years work experience. 
        I have a great passion for creating user-friendly and responsive web apps using modern technologies.
        I am proficient in ReactJS, Angular, NodeJS, Docker and Kubernetes just to name a few.
      </motion.p>

      <motion.div className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {servicesData.map(({ icon, title, description, link }, index) => (
          <motion.div key={index} className="border-[0.5px] border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:hover:shadow-white dark:hover:bg-darkHover/50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-rose-500 text-white p-2 rounded-md w-fit mt-3">
              <Image src={icon} alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">{description}</p>
            <Link href={link} className='flex items-center gap-2 mt-5 text-sm'>
              Read more <MdArrowForward />              
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}