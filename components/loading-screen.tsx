"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Code className="h-12 w-12" />
        </motion.div>
        <p className="text-lg font-medium">Loading portfolio...</p>
      </motion.div>
    </div>
  )
}
