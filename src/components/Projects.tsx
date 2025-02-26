import * as motion from 'motion/react-client'
import { projectsData } from '@/lib/data'
import Link from 'next/link'

export default function Projects() {
  return (
    <motion.div id="projects" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >My portfolio</motion.h4>

      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >My latest Projects</motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! 
        Here you'll find a collection of my latest projects, 
        showcasing my skills and expertise in web development.
      </motion.p>

      <motion.div className='grid grid-cols-auto my-10 gap-6 dark:text-black'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className='bg-gray-300 text-black dark:bg-darkHover dark:text-white w-full h-full rounded-md py-3 px-5 flex flex-col justify-center items-center gap-8'
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-semibold">
                <Link className="text-lg hover:underline duration-300" href={project.url} target="_blank">{project.title}</Link>                
                </h2>
              <p className="text-sm dark:text-gray-200">{project.description}</p>
              {/* <FaLocationArrow className="w-6 h-6" /> */}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>      
    </motion.div>
  )
}