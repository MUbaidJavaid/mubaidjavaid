"use client"

import { motion } from "framer-motion"
import { ArrowRight, GitBranch, Code2, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Neural Analytics Dashboard",
    description: "Real-time data visualization platform with 3D graphs and interactive insights.",
    status: "deployed",
    stage: "Production",
    progress: 100,
    tags: ["React", "Three.js", "Node.js", "PostgreSQL"],
    complexity: "High",
    timeline: ["Planning", "Development", "Testing", "Deployment"],
    currentStage: 3,
  },
  {
    id: 2,
    title: "Immersive E-Commerce Platform",
    description: "Full-stack marketplace with AR product preview and serverless architecture.",
    status: "deployed",
    stage: "Production",
    progress: 100,
    tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
    complexity: "High",
    timeline: ["Planning", "Development", "Testing", "Deployment"],
    currentStage: 3,
  },
  {
    id: 3,
    title: "Collaborative Design Tool",
    description: "Real-time collaboration app with WebSocket support and infinite canvas.",
    status: "deployed",
    stage: "Production",
    progress: 100,
    tags: ["Next.js", "WebSocket", "Canvas API", "Redis"],
    complexity: "Very High",
    timeline: ["Planning", "Development", "Testing", "Deployment"],
    currentStage: 3,
  },
]

export default function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
            Project Pipeline
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Featured work showcasing technical depth and creative execution through the development lifecycle
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 p-8 rounded-xl border border-accent/20 bg-background/40 backdrop-blur"
      >
        <div className="flex items-center gap-4 mb-8">
          <GitBranch className="text-primary" size={24} />
          <h3 className="text-2xl font-bold">Development Workflow</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-2">
          {["Planning", "Development", "Testing", "Deployment"].map((stage, index) => (
            <motion.div key={stage} className="flex items-center w-full md:w-auto">
              <motion.div className="flex flex-col items-center flex-1 md:flex-none" whileHover={{ scale: 1.1 }}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-sm mb-2"
                  whileHover={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
                >
                  {index + 1}
                </motion.div>
                <span className="text-sm font-semibold text-center">{stage}</span>
              </motion.div>

              {index < 3 && (
                <motion.div
                  className="hidden md:block flex-1 h-1 bg-gradient-to-r from-primary/50 to-transparent mx-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project, projectIndex) => (
          <motion.div key={project.id} variants={item} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            <div className="relative bg-background/40 backdrop-blur border border-accent/20 rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 h-full flex flex-col">
              {/* Project header */}
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-xs text-primary font-semibold uppercase">{project.complexity}</span>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-accent">{project.stage}</span>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{project.description}</p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground font-mono">Progress</span>
                  <span className="text-xs font-mono text-accent">{project.progress}%</span>
                </div>
                <motion.div
                  className="w-full h-2 bg-background/80 rounded-full overflow-hidden border border-accent/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.2 * projectIndex }}
                  />
                </motion.div>
              </div>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pipeline stages mini-indicator */}
              <div className="flex justify-between mb-6 gap-1">
                {project.timeline.map((stage, index) => (
                  <motion.div
                    key={stage}
                    className={`flex-1 h-1 rounded-full ${
                      index <= project.currentStage ? "bg-gradient-to-r from-primary to-accent" : "bg-accent/20"
                    }`}
                    whileInView={{ scaleX: 1 }}
                    initial={{ scaleX: 0 }}
                    transition={{ delay: 0.1 * index }}
                  />
                ))}
              </div>

              {/* Call to action */}
              <motion.button
                className="w-full py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-semibold flex items-center justify-center gap-2 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Project</span>
                <motion.span className="group-hover/btn:translate-x-1 transition-transform">→</motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Projects Deployed", value: "3", icon: Code2 },
          { label: "Active Users", value: "10K+", icon: Zap },
          { label: "Development Hours", value: "2000+", icon: ArrowRight },
          { label: "Success Rate", value: "100%", icon: Zap },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className="p-6 rounded-lg border border-accent/20 bg-background/40 backdrop-blur text-center"
              whileHover={{ borderColor: "rgba(139, 92, 246, 0.5)" }}
            >
              <motion.div className="flex justify-center mb-3" whileHover={{ scale: 1.1, rotate: 10 }}>
                <Icon className="text-primary" size={24} />
              </motion.div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
