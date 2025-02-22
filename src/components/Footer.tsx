import { AiTwotoneMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <span className='text-3xl font-bold tracking-wider'>Lekan</span> 
        <span className='text-4xl font-bold text-red-500'>.</span>
      </div>
      <div className="flex items-center w-max mx-auto gap-4 py-3">
        <AiTwotoneMail className="w-6 h-6 mx-auto" />
        <span>olalekan.junaid@gmail.com</span>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 py-6 mx-[10%] mt-2'>
        <p>Copyright &copy; 2025 Lekan Junaid. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a href="https://github.com/LekanJunaid" target='_blank'>GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/olalekan-junaid/" target='_blank'>LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/LekanJunaid" target='_blank'>Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}