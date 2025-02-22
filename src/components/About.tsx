import Image from 'next/image'
import * as motion from 'motion/react-client'
import { FaCode } from 'react-icons/fa'
import { SlGraduation } from 'react-icons/sl'
import { BiHistory } from 'react-icons/bi'
import { toolsData } from '@/lib/data'

export default function About() {
  const infoList = [
    {
      icon: <FaCode className="mt-3 size-10" />,
      title: 'Languages',
      description: 'HTML, CSS, JavaScript, ReactJs, NextJs',
    },
    {
      icon: <SlGraduation className="mt-3 size-10" />,
      title: 'Education',
      description: 'Master of Science in Mech. Engineering',
    },
    {
      icon: <BiHistory className="mt-3 size-10" />,
      title: 'Experience',
      description: 'Over 5 years experience in Fullstack Web Development',
    }
  ]

  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >Introduction</motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >About me</motion.h2>
      <motion.div className="flex flex-col w-full lg:flex-row items-center gap-20 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image src="/images/profile.jpg" alt="profile" className="w-full rounded-3xl" width={300} height={300} />
        </motion.div>
        <motion.div className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I am a seasoned Full Stack Web Developer with over 10 years experience as a freelancer. 
            I bring a rich repository of experience in crafting state-of-the-art digital solutions. 
            My enthusiasm for teamwork accomplishments combined with my high proficiency in 
            leading-edge web technologies is what I would bring to your organization. 
            I am proficient in ReactJS, Angular, NodeJS, Docker and Kubernetes just to name a few. 
            My technical prowess in web development is further underpinned by my Master of Science degree in Mechanical Engineering. 
            I am currently seeking a position as a Full Stack Web Developer so lets connect and make things happen. 
          </p>
          <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                whileHover={{ scale: 1.05 }}
              >
                {icon}
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 className="my-6 text-gray-700 font-ovo dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >Tools I use</motion.h4>

          <motion.ul className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <Image src={tool} alt="tool" width={40} height={40} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}