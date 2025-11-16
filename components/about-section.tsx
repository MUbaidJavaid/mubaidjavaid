"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Target } from "lucide-react"

export default function AboutSection() {
  const experiences = [
    {
      year: "2024",
      title: "Senior Full-Stack Engineer",
      company: "Tech Innovations Inc.",
      description: "Led development of immersive web experiences, mentored junior developers.",
      icon: Award,
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description: "Built scalable applications, optimized performance, implemented testing strategies.",
      icon: Target,
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "StartUp Labs",
      description: "Developed responsive interfaces, improved UX, led design system initiatives.",
      icon: Calendar,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">My Journey</span>
        </h2>
        <p className="text-lg text-white/70 max-w-3xl">
          Building expertise through diverse experiences, mentorship, and continuous learning.
        </p>
      </motion.div>

      <div className="max-w-3xl">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div key={exp.year} variants={item} className="mb-12 relative pl-12 group">
                {/* Connecting line */}
                <div className="absolute left-4 top-8 w-0.5 h-20 bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent" />

                {/* Timeline dot with icon */}
                <motion.div
                  className="absolute -left-2 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-white flex items-center justify-center soft-glow"
                  whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(99,102,241,0.18)" }}
                >
                  <Icon className="text-white" size={18} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="group hover:border-indigo-600 p-6 rounded-lg border border-slate-200 bg-white/5 backdrop-blur-sm transition-colors soft-glow"
                  whileHover={{ x: 6 }}
                >
                  <span className="text-sm group-hover:text-indigo-600  text-white font-bold font-mono">{exp.year}</span>
                  <h3 className="text-lg font-bold md:font-semibold mt-3 mb-1 text-white group-hover:bg-gradient-to-r 
                  group-hover:from-indigo-600 
                  group-hover:via-purple-600
                  group-hover: to-pink-600
                  group-hover:bg-clip-text 
                  group-hover:text-transparent 
                group-hover:dark:text-indigo-400">{exp.title}</h3>
                  <p className="text-white/80 group-hover:text-purple-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-white/65">{exp.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 p-8 rounded-xl border border-slate-200 hover:border-indigo-600 bg-white/5 backdrop-blur-sm max-w-3xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">Beyond Code</h3>
        <p className="text-white/70 leading-relaxed">
          I'm passionate about creating digital experiences that blend aesthetics with functionality. When I'm not
          coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring
          developers. I believe in continuous learning and staying at the forefront of web development innovation.
        </p>
      </motion.div>
    </div>
  )
}
