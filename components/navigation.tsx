// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X, Command, Sun, Moon, Menu } from "lucide-react"
// import { useTheme } from "next-themes"

// interface NavigationProps {
//   activeSection: string
//   onNavigate: (section: string) => void
// }

// export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
//   const [isTerminalOpen, setIsTerminalOpen] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)
//   const [input, setInput] = useState("")
//   const [commands, setCommands] = useState<Array<{ type: "input" | "output"; text: string }>>([])
//   const [commandIndex, setCommandIndex] = useState(-1)
//   const [commandHistory, setCommandHistory] = useState<string[]>([])
//   const [mounted, setMounted] = useState(false)

//   const menuItems = [
//     { label: "hero", command: "goto hero", description: "Return to hero section" },
//     { label: "projects", command: "show projects", description: "View project portfolio" },
//     { label: "skills", command: "list skills", description: "Explore technical skills" },
//     { label: "about", command: "whoami", description: "Learn about me" },
//     { label: "contact", command: "contact me", description: "Get in touch" },
//   ]

//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//     // close mobile menu on window resize (prevent stuck state)
//     const onResize = () => {
//       if (window.innerWidth >= 768) setIsMobileOpen(false)
//     }
//     window.addEventListener("resize", onResize)
//     return () => window.removeEventListener("resize", onResize)
//   }, [])

//   // Handle click outside mobile menu to close it
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       setIsMobileOpen(false)
//     }
//   }

//   const processCommand = (cmd: string): string => {
//     const lowerCmd = cmd.toLowerCase().trim()

//     if (lowerCmd === "help") {
//       return `Available commands:\n  ${menuItems.map((item) => `${item.command} - ${item.description}`).join("\n  ")}\n  clear - Clear terminal\n  help - Show this message`
//     }

//     if (lowerCmd === "clear") {
//       setCommands([])
//       return ""
//     }

//     for (const item of menuItems) {
//       if (lowerCmd.includes(item.label) || lowerCmd === item.command) {
//         onNavigate(item.label)
//         document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
//         return `Navigating to ${item.label}...`
//       }
//     }

//     return `Command not found: ${cmd}. Type 'help' for available commands.`
//   }

//   const handleCommand = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && input.trim()) {
//       const output = processCommand(input)

//       setCommands([...commands, { type: "input", text: input }, ...(output ? [{ type: "output", text: output }] : [])])

//       setCommandHistory([...commandHistory, input])
//       setCommandIndex(-1)
//       setInput("")
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault()
//       const newIndex = Math.min(commandIndex + 1, commandHistory.length - 1)
//       if (newIndex >= 0) {
//         setCommandIndex(newIndex)
//         setInput(commandHistory[commandHistory.length - 1 - newIndex])
//       }
//     } else if (e.key === "ArrowDown") {
//       e.preventDefault()
//       if (commandIndex > 0) {
//         const newIndex = commandIndex - 1
//         setCommandIndex(newIndex)
//         setInput(commandHistory[commandHistory.length - 1 - newIndex])
//       } else if (commandIndex === 0) {
//         setCommandIndex(-1)
//         setInput("")
//       }
//     }
//   }

//   return (
//     <>
//       <motion.nav
//         className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-accent/30 shadow-md"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <motion.div
//             className="text-2xl font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-mono"
//             whileHover={{ scale: 1.05 }}
//           >
//             &lt;dev /&gt;
//           </motion.div>

//           <div className="hidden md:flex items-center gap-8">
//             {menuItems.map((item) => (
//               <motion.button
//                 key={item.label}
//                 onClick={() => {
//                   onNavigate(item.label)
//                   document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
//                 }}
//                 className={`text-sm font-medium transition-all relative group ${
//                   activeSection === item.label 
//                     ? "text-primary font-semibold" 
//                     : "text-foreground/70 hover:text-foreground"
//                 }`}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {item.label}
//                 {activeSection === item.label && (
//                   <motion.div
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary"
//                     layoutId="activeIndicator"
//                   />
//                 )}
//                 <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                   <div className="bg-background/95 border border-primary/40 rounded px-3 py-2 whitespace-nowrap text-xs text-foreground font-medium shadow-lg">
//                     {item.description}
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//           <div className="flex items-center gap-2 md:gap-3">
//               <motion.button
//               onClick={() => setIsTerminalOpen(!isTerminalOpen)}
//               className="px-2 md:px-3 py-2 rounded-lg bg-primary/15 border border-primary/40 text-primary hover:bg-primary/25 hover:border-primary/60 transition-all duration-200 flex items-center gap-2 font-medium"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Open portfolio terminal"
//               title="Open portfolio terminal"
//             >
//               <Command size={18} />
//               <span className="hidden sm:inline text-xs font-semibold">Terminal</span>
//             </motion.button>

//             {/* Theme toggle */}
//             {mounted && (
//               <motion.button
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 className="p-2 rounded-md bg-foreground/10 border border-foreground/20 hover:bg-foreground/15 hover:border-foreground/30 transition-all duration-200"
//                 whileHover={{ scale: 1.1, rotate: 180 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Toggle theme"
//                 title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//               >
//                 {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
//               </motion.button>
//             )}

//             {/* Mobile hamburger */}
//             <motion.button
//               onClick={() => setIsMobileOpen(true)}
//               className="md:hidden p-2 rounded-md bg-foreground/10 border border-foreground/20 hover:bg-foreground/15 hover:border-foreground/30 transition-all duration-200"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Open menu"
//               title="Open menu"
//             >
//               <Menu size={20} />
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {isTerminalOpen && (
//           <motion.div
//             className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-background/98 backdrop-blur-lg border border-accent/40 rounded-lg shadow-2xl flex flex-col overflow-hidden"
//             initial={{ opacity: 0, scale: 0.9, y: -20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: -20 }}
//             transition={{ duration: 0.2 }}
//           >
//             {/* Terminal header */}
//             <div className="flex items-center justify-between bg-primary/12 border-b border-accent/30 px-4 py-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                 <div className="w-3 h-3 rounded-full bg-green-500" />
//               </div>
//               <span className="text-xs font-mono font-bold text-foreground/70">Portfolio Terminal</span>
//               <button
//                 onClick={() => setIsTerminalOpen(false)}
//                 className="text-foreground/70 hover:text-foreground hover:bg-accent/10 p-1 rounded transition-all duration-200"
//                 aria-label="Close terminal"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* Terminal output area */}
//             <div className="flex-1 overflow-y-auto max-h-96 p-4 space-y-2 font-mono text-sm bg-background/50">
//               <div className="text-foreground/70">$ Portfolio Terminal Ready</div>
//               <div className="text-foreground/60 text-xs">Type 'help' for available commands</div>

//               {commands.map((cmd, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {cmd.type === "input" ? (
//                     <div className="text-primary font-semibold">$ {cmd.text}</div>
//                   ) : (
//                     <div className="text-foreground/70 whitespace-pre-wrap text-xs pl-4">{cmd.text}</div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Terminal input area */}
//             <div className="border-t border-accent/30 bg-background/50 p-4">
//               <div className="flex items-start gap-2">
//                 <span className="text-primary font-mono text-sm font-bold">$</span>
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   autoFocus
//                   className="bg-transparent outline-none flex-1 text-foreground placeholder-foreground/50 font-mono text-sm"
//                   placeholder="Enter command..."
//                 />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isMobileOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleBackdropClick}
//             transition={{ duration: 0.2 }}
//           >
//             {/* Mobile menu header */}
//             <div className="flex items-center justify-between bg-background/50 border-b border-accent/20 px-6 py-5">
//               <div className="text-xl font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
//                 &lt;dev /&gt;
//               </div>
//               <div className="flex items-center gap-3">
//                 {mounted && (
//                   <motion.button
//                     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                     className="p-2.5 rounded-lg bg-foreground/10 border border-foreground/20 hover:bg-foreground/15 hover:border-foreground/30 transition-all duration-200"
//                     whileHover={{ scale: 1.1, rotate: 180 }}
//                     whileTap={{ scale: 0.95 }}
//                     aria-label="Toggle theme"
//                     title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//                   >
//                     {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
//                   </motion.button>
//                 )}
//                 <motion.button 
//                   onClick={() => setIsMobileOpen(false)} 
//                   className="p-2.5 rounded-lg hover:bg-accent/10 active:bg-accent/20 transition-all duration-200"
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label="Close menu"
//                   title="Close menu"
//                 >
//                   <X size={22} className="text-foreground" />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Mobile menu items */}
//             <nav className="flex-1 overflow-y-auto">
//               <ul className="flex flex-col p-6 space-y-2">
//                 {menuItems.map((item, index) => (
//                   <motion.li
//                     key={item.label}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.05 }}
//                   >
//                     <button
//                       onClick={() => {
//                         setIsMobileOpen(false)
//                         onNavigate(item.label)
//                         document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
//                       }}
//                       className={`w-full text-left font-semibold py-3 px-4 rounded-lg transition-all duration-200 group ${
//                         activeSection === item.label 
//                           ? 'bg-primary/15 border border-primary/30 text-primary shadow-md' 
//                           : 'text-foreground hover:text-primary hover:bg-primary/8 border border-transparent'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-base font-bold tracking-wide uppercase">{item.label}</span>
//                         {activeSection === item.label && (
//                           <motion.div
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="w-2 h-2 rounded-full bg-primary"
//                           />
//                         )}
//                       </div>
//                       <div className="text-xs text-foreground/60 font-normal mt-1 lowercase">{item.description}</div>
//                     </button>
//                   </motion.li>
//                 ))}
//               </ul>
//             </nav>

//             {/* Mobile menu footer with actions */}
//             <div className="border-t border-accent/20 bg-background/50 px-6 py-6 space-y-3">
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.2 }}
//                 onClick={() => {
//                   setIsMobileOpen(false)
//                   onNavigate('contact')
//                   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//                 }}
//                 className="w-full px-4 py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-background font-semibold hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-200"
//               >
//                 Get In Touch
//               </motion.button>

//               <motion.button 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.25 }}
//                 onClick={() => setIsMobileOpen(false)} 
//                 className="w-full px-4 py-3 rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-200 font-semibold"
//               >
//                 Close Menu
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Command, Sun, Moon, Menu } from "lucide-react"
import { useTheme } from "next-themes"

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [input, setInput] = useState("")
  const [commands, setCommands] = useState<Array<{ type: "input" | "output"; text: string }>>([])
  const [commandIndex, setCommandIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { label: "hero", command: "goto hero", description: "Return to hero section" },
    { label: "projects", command: "show projects", description: "View project portfolio" },
    { label: "skills", command: "list skills", description: "Explore technical skills" },
    { label: "about", command: "whoami", description: "Learn about me" },
    { label: "contact", command: "contact me", description: "Get in touch" },
  ]

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false)
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", onResize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileOpen(false)
    }
  }

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
      setCommands([...commands, { type: "input", text: input }, ...(output ? [{ type: "output" as const, text: output }] : [])])
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? " bg-white/5 backdrop-blur-lg border-b border-white  shadow-lg dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300" 
            : "bg-white/5 backdrop-blur-lg border-b dark:backdrop-blur-2xl border-white/70 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <motion.div
            className="text-xl sm:text-2xl font-bold text-white dark:text-indigo-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;dev /&gt;
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => {
                  onNavigate(item.label)
                  document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all group ${
                  activeSection === item.label 
                    ? "text-indigo-600 dark:text-indigo-400  dark:bg-indigo-950/50" 
                    : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/5 hover:backdrop-blur-sm hover:border-2 hover:border-indigo-300 dark:hover:bg-indigo-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="capitalize text-white dark:text-indigo-300">{item.label}</span>
                {activeSection === item.label && (
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-0.5 dark:bg-indigo-300 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                    {item.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-900 dark:bg-slate-100 rotate-45" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className="px-3 py-2 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-300 dark:border-indigo-700 dark:bg-indigo-900/30  dark:text-indigo-300  dark:hover:bg-indigo-800/40 transition-all hover:bg-indigo-200 duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open portfolio terminal"
            >
              <Command size={18} />
              <span className="hidden sm:inline text-sm font-semibold">Terminal</span>
            </motion.button>

            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} className="text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} className="text-slate-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            <motion.button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <Menu size={20} className="text-slate-700 dark:text-slate-300" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Terminal */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">Portfolio Terminal</span>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 p-1 rounded transition-all"
                aria-label="Close terminal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto max-h-96 p-4 space-y-2 font-mono text-sm bg-white dark:bg-slate-900">
              <div className="text-slate-600 dark:text-slate-400">$ Portfolio Terminal Ready</div>
              <div className="text-slate-500 dark:text-slate-500 text-xs">Type 'help' for available commands</div>

              {commands.map((cmd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {cmd.type === "input" ? (
                    <div className="text-indigo-600 dark:text-indigo-400 font-semibold">$ {cmd.text}</div>
                  ) : (
                    <div className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap text-xs pl-4">{cmd.text}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4">
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-bold">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  autoFocus
                  className="bg-transparent outline-none flex-1 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 font-mono text-sm"
                  placeholder="Enter command..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-white/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 px-6 py-5">
              <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                &lt;dev /&gt;
              </div>
              <div className="flex items-center gap-3">
                {mounted && (
                  <motion.button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "dark" ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-slate-700" />}
                  </motion.button>
                )}
                <motion.button 
                  onClick={() => setIsMobileOpen(false)} 
                  className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={22} className="text-slate-700 dark:text-slate-300" />
                </motion.button>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="flex flex-col p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        setIsMobileOpen(false)
                        onNavigate(item.label)
                        document.getElementById(item.label)?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className={`w-full text-left font-semibold py-3 px-4 rounded-lg transition-all ${
                        activeSection === item.label 
                          ? 'bg-indigo-100 dark:bg-indigo-950/50 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 shadow-md' 
                          : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base uppercase tracking-wide capitalize">{item.label}</span>
                        {activeSection === item.label && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"
                          />
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-normal mt-1">{item.description}</div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-6 py-6 space-y-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => {
                  setIsMobileOpen(false)
                  onNavigate('contact')
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}