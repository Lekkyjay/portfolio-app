import { motion } from 'motion/react'

export default function MotionWrapper({ type, children, ...props }: { type: keyof typeof motion, children: React.ReactNode }, ref: React.RefObject<HTMLDivElement | null>) {
  const Component = type ? motion[type] as React.ComponentType<any> : motion.div

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
}