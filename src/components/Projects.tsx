import { FaLocationArrow } from 'react-icons/fa6'
import { MdArrowForward } from 'react-icons/md'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web development portfolio! 
        Here you'll find a collection of my latest projects, 
        showcasing my skills and expertise in web development.
      </p>

      <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            style={{ backgroundImage: `url(${project.bgImage})` }} 
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <FaLocationArrow />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more <MdArrowForward />
      </button>
    </div>
  )
}