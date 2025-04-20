"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer (Intern)",
      company: "EOXS",
      period: "January 2025 – March 2025",
      location: "Remote",
      description: [
        "Developed a modern video playlist management system using MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Implemented responsive UI components with React and Material UI for seamless user experience across devices.",
        "Built RESTful APIs for efficient video management, implementing secure authentication and authorization.",
        "Collaborated in an Agile environment, participating in daily stand-ups and sprint planning meetings.",
      ],
      skills: ["MERN Stack", "React.js", "Material UI", "RESTful APIs", "Agile"],
    },
    {
      title: "Web Developer (Intern)",
      company: "LifeTech Software",
      period: "May 2022 – July 2022",
      location: "",
      description: [
        "Built a feature-rich website for college notes, College Notes Gallery.",
        "It offers options for downloading and uploading notes.",
      ],
      skills: ["Web Development", "Frontend", "Backend"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-teal-400 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>

                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        <p>{exp.period}</p>
                        {exp.location && <p>{exp.location}</p>}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
