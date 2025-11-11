"use client"

import { motion } from "framer-motion"
import { TrendingUp, Award, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", proficiency: 95, years: 4 },
      { name: "Next.js", proficiency: 92, years: 3 },
      { name: "TypeScript", proficiency: 90, years: 3 },
      { name: "Tailwind CSS", proficiency: 95, years: 2 },
      { name: "Framer Motion", proficiency: 88, years: 2 },
      { name: "Three.js", proficiency: 85, years: 1.5 },
    ],
    color: "from-blue-500",
    icon: TrendingUp,
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", proficiency: 92, years: 4 },
      { name: "PostgreSQL", proficiency: 88, years: 3 },
      { name: "Supabase", proficiency: 90, years: 2 },
      { name: "API Design", proficiency: 89, years: 3 },
      { name: "Authentication", proficiency: 91, years: 3 },
      { name: "WebSockets", proficiency: 87, years: 2 },
    ],
    color: "from-purple-500",
    icon: Award,
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", proficiency: 93, years: 5 },
      { name: "Docker", proficiency: 85, years: 2 },
      { name: "Vercel", proficiency: 94, years: 3 },
      { name: "GitHub Actions", proficiency: 88, years: 2 },
      { name: "AWS", proficiency: 82, years: 1.5 },
      { name: "Turbopack", proficiency: 84, years: 1 },
    ],
    color: "from-cyan-500",
    icon: Zap,
  },
]

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Arsenal
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Curated expertise across modern web development with proficiency metrics
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {[
          { label: "Skills Mastered", value: "18+", icon: Award },
          { label: "Years Experience", value: "5+", icon: TrendingUp },
          { label: "Avg Proficiency", value: "89%", icon: Zap },
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className="p-6 rounded-lg border border-accent/20 bg-background/40 backdrop-blur"
              whileHover={{ borderColor: "rgba(139, 92, 246, 0.5)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <motion.div className="p-3 rounded-lg bg-primary/10" whileHover={{ scale: 1.1 }}>
                  <Icon className="text-primary" size={20} />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIdx) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} to-transparent/20`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div
                  className={`h-1 w-12 bg-gradient-to-r ${category.color} to-transparent mb-6 group-hover:w-24 transition-all duration-300`}
                />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item} whileHover={{ x: 4 }} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-xs text-muted-foreground">{skill.years} years</p>
                      </div>
                      <motion.span
                        className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>

                    {/* Proficiency bar */}
                    <div className="relative h-2 bg-background/80 rounded-full overflow-hidden border border-accent/20">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} to-accent rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 p-8 rounded-xl border border-accent/20 bg-background/40 backdrop-blur"
      >
        <h3 className="text-2xl font-bold mb-8">Experience Timeline</h3>

        <div className="space-y-8">
          {[
            {
              year: "2024 - Present",
              role: "Senior Full-Stack Developer",
              company: "Tech Innovators Inc.",
              description: "Leading frontend architecture and mentoring junior developers",
            },
            {
              year: "2022 - 2024",
              role: "Full-Stack Developer",
              company: "Digital Solutions Co.",
              description: "Built scalable applications with React and Node.js, managing databases and APIs",
            },
            {
              year: "2020 - 2022",
              role: "Junior Developer",
              company: "StartUp Hub",
              description: "Developed responsive web applications and learned modern development practices",
            },
            {
              year: "2018 - 2020",
              role: "Freelance Developer",
              company: "Self-Employed",
              description: "Built custom websites and applications for various clients",
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              className="flex gap-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                  whileHover={{ scale: 1.3 }}
                />
                {idx < 3 && <div className="w-1 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-2" />}
              </div>

              {/* Timeline content */}
              <motion.div className="pb-8" whileHover={{ x: 8 }}>
                <div className="text-sm font-mono text-primary mb-1">{exp.year}</div>
                <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                <p className="text-sm text-accent mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
