"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Command } from "lucide-react"

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [input, setInput] = useState("")
  const [commands, setCommands] = useState<Array<{ type: "input" | "output"; text: string }>>([])
  const [commandIndex, setCommandIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState<string[]>([])

  const menuItems = [
    { label: "hero", command: "goto hero", description: "Return to hero section" },
    { label: "projects", command: "show projects", description: "View project portfolio" },
    { label: "skills", command: "list skills", description: "Explore technical skills" },
    { label: "about", command: "whoami", description: "Learn about me" },
    { label: "contact", command: "contact me", description: "Get in touch" },
  ]

  const processCommand = (cmd: string): string => {
    const lowerCmd = cmd.toLowerCase().trim()

    if (lowerCmd === "help") {
      return `Available commands:\n  ${menuItems.map((item) => `${item.command} - ${item.description}`).join("\n  ")}\n  clear - Clear terminal\n  help - Show this message`
    }

    if (lowerCmd === "clear") {
      setCommands([])
      return ""
    }

    for (const item of menuItems) {
      if (lowerCmd.includes(item.label) || lowerCmd === item.command) {
        onNavigate(item.label)
        document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
        return `Navigating to ${item.label}...`
      }
    }

    return `Command not found: ${cmd}. Type 'help' for available commands.`
  }

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      const output = processCommand(input)

      setCommands([...commands, { type: "input", text: input }, ...(output ? [{ type: "output", text: output }] : [])])

      setCommandHistory([...commandHistory, input])
      setCommandIndex(-1)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.min(commandIndex + 1, commandHistory.length - 1)
      if (newIndex >= 0) {
        setCommandIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (commandIndex > 0) {
        const newIndex = commandIndex - 1
        setCommandIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (commandIndex === 0) {
        setCommandIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-accent/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent font-mono"
            whileHover={{ scale: 1.05 }}
          >
            &lt;dev /&gt;
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => {
                  onNavigate(item.label)
                  document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`text-sm font-medium transition-all relative group ${
                  activeSection === item.label ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
                {activeSection === item.label && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeIndicator"
                  />
                )}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-background/95 border border-accent/40 rounded px-2 py-1 whitespace-nowrap text-xs text-accent">
                    {item.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Command size={16} />
            <span className="text-sm font-mono">$_</span>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            className="fixed top-20 right-4 z-50 w-96 bg-background/98 backdrop-blur border border-accent/40 rounded-lg shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between bg-primary/10 border-b border-accent/30 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-accent">Portfolio Terminal</span>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal output area */}
            <div className="flex-1 overflow-y-auto max-h-96 p-4 space-y-2 font-mono text-sm bg-background/50">
              <div className="text-accent">$ Portfolio Terminal Ready</div>
              <div className="text-muted-foreground text-xs">Type 'help' for available commands</div>

              {commands.map((cmd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {cmd.type === "input" ? (
                    <div className="text-primary">$ {cmd.text}</div>
                  ) : (
                    <div className="text-accent/80 whitespace-pre-wrap text-xs pl-4">{cmd.text}</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Terminal input area */}
            <div className="border-t border-accent/30 bg-background/50 p-4">
              <div className="flex items-start gap-2">
                <span className="text-primary font-mono mt-1">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  autoFocus
                  className="bg-transparent outline-none flex-1 text-foreground placeholder-muted-foreground font-mono text-sm"
                  placeholder="Enter command..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
