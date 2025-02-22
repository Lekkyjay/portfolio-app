'use client'

import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import * as motion from 'motion/react-client'

export default function Contact() {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending....')

    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target)
      formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult('Form Submitted Successfully')
        event.target.reset()
      } 
      else {
        console.log('Error', data)
        setResult(data.message)
      }
    } 
    else {
      console.error('Event target is not an HTMLFormElement')
      setResult('Event target is not an HTMLFormElement')
    }
  }

  return (
    <motion.div id="contact" className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >Connect with me</motion.h4>

      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >Get in touch</motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I'd wold love to hear from you! 
        If you have any questions or just want to say hi, 
        don't hesitate to contact me.
      </motion.p>

      <motion.form onSubmit={onSubmit} className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="grid grid-cols-auto gap-6 mb-8">
          <motion.input type="text" placeholder="Enter your name" name="name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
          <motion.input type="email" placeholder="Enter your email" name="email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
        </div>
        <motion.textarea rows={6} placeholder="Enter your message" name="message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        ></motion.textarea>

        <motion.button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Submit <MdArrowForward />
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}