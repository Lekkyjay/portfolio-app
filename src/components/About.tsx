import { infoList, toolsData } from '@/lib/data'
import Image from 'next/image'

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-10">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src="/images/profile.jpg" alt="profile" className="w-full rounded-3xl" width={300} height={300} />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am a seasoned Full Stack Web Developer with over 10 years experience as a freelancer. 
            I bring a rich repository of experience in crafting state-of-the-art digital solutions. 
            My enthusiasm for teamwork accomplishments combined with my high proficiency in 
            leading-edge web technologies is what I would bring to your organization. 
            I am proficient in ReactJS, Angular, NodeJS, Docker and Kubernetes just to name a few. 
            My technical prowess in web development is further underpinned by my Master of Science degree in Mechanical Engineering. 
            I am currently seeking a position as a Full Stack Web Developer so lets connect and make things happen. 
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500">
                <Image src={icon} alt="icon" width={40} height={40} className="mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <Image src={tool} alt="tool" width={40} height={40} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}