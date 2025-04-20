import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
              Rohit.dev
            </div>
            <p className="text-muted-foreground mt-2 max-w-md">
              Full Stack Developer specializing in MERN stack and Next.js
            </p>
          </div>

          <div className="flex space-x-4">
            <Button asChild size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="rounded-full hover:text-primary hover:bg-primary/10">
              <a href="mailto:rohitjham762@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rohit Kumar Jha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
