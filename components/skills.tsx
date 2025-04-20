"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Server, Layers, Cpu } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      name: "Database",
      icon: Database,
      skills: ["MongoDB", "SQL"],
    },
    {
      name: "Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      name: "Tools & Version Control",
      icon: Layers,
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      name: "Computer Fundamentals",
      icon: Cpu,
      skills: [
        "Data Structures and Algorithms",
        "OOPS",
        "Operating System",
        "Database Management System",
        "Computer Networks",
        "Problem Solving",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My technical skills and areas of expertise.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.name} variants={item}>
              <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-600 to-teal-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
