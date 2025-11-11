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
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Journey</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Building expertise through diverse experiences and continuous learning
        </p>
      </motion.div>

      <div className="max-w-3xl">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div key={exp.year} variants={item} className="mb-12 relative pl-12 group">
                {/* Connecting line */}
                <div className="absolute left-4 top-8 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent" />

                {/* Timeline dot with icon */}
                <motion.div
                  className="absolute -left-2 top-0 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
                >
                  <Icon className="text-primary" size={18} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="p-6 rounded-lg border border-accent/20 bg-background/40 backdrop-blur hover:border-primary/40 transition-colors"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-sm text-primary font-bold font-mono">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-3 mb-1">{exp.title}</h3>
                  <p className="text-accent font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
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
        className="mt-20 p-8 rounded-xl border border-accent/20 bg-background/40 backdrop-blur max-w-3xl"
      >
        <h3 className="text-2xl font-bold mb-4">Beyond Code</h3>
        <p className="text-muted-foreground leading-relaxed">
          I'm passionate about creating digital experiences that blend aesthetics with functionality. When I'm not
          coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring
          developers. I believe in continuous learning and staying at the forefront of web development innovation.
        </p>
      </motion.div>
    </div>
  )
}
