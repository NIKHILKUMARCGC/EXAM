'use client'

import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransition />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.6, duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
