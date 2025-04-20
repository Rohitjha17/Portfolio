"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Video Learning Management System",
      description: "A modern video learning platform with admin dashboard, playlist creation, and analytics tracking.",
      image: "/images/project1.png",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Cloudinary", "Chart.js", "Framer Motion"],
      github: "#",
      demo: "#",
      details: [
        "Developed a modern video learning platform using Next.js, React, TypeScript, and Firebase with Cloudinary CDN for secure video hosting.",
        "Engineered an intuitive admin dashboard with advanced filtering, sorting, and search capabilities for content management.",
        "Implemented key features: real-time video preview, playlist creation system, dark/light theme support, and video analytics tracking.",
      ],
    },
    {
      id: 2,
      title: "Asteroid Blaster",
      description:
        "A 2D shooting game with multiple levels, weapons, and a score board using HTML Canvas and JavaScript.",
      image: "/images/project2.png",
      tags: ["HTML", "CSS", "JavaScript", "Canvas", "GSAP"],
      github: "#",
      demo: "#",
      details: [
        "A 2D Game with Multiple Levels and Weapons with a Score Board.",
        "Local storage is getting used for storing high score.",
        "The HTML <canvas> element is getting used to draw graphics, on the fly, via JavaScript.",
        "GSAP CDN is getting used for smooth animation of particles.",
      ],
    },
    {
      id: 3,
      title: "College Notes Gallery",
      description: "A feature-rich website for college notes with options for downloading and uploading notes.",
      image: "/images/project3.png",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      details: [
        "Built a feature-rich website for college notes during internship at LifeTech Software.",
        "Implemented secure file upload and download functionality.",
        "Created user authentication and authorization system.",
        "Designed responsive UI for optimal viewing on all devices.",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge
                        variant="outline"
                        className="bg-muted/50 hover:bg-muted text-muted-foreground border-muted/50"
                      >
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary/20 hover:bg-primary/10"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  <div className="flex space-x-2">
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative p-6">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-4 rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </Button>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-teal-400 hover:from-purple-700 hover:to-teal-500 text-white"
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
