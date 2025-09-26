"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  caseStudyUrl: string;
}

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const techStackColors: Record<string, string> = {
  JavaScript: "bg-yellow-500 text-black",
  TypeScript: "bg-blue-500 text-white",
  React: "bg-cyan-500 text-white",
  "Next.js": "bg-black text-white",
  Bootstrap: "bg-purple-500 text-white",
  Tailwind: "bg-teal-500 text-white",
  "Node.js": "bg-green-500 text-white",
  Python: "bg-blue-600 text-white",
  "Vue.js": "bg-emerald-500 text-white",
  Angular: "bg-red-500 text-white",
};

const getTechStackIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    JavaScript: "JS",
    TypeScript: "TS",
    React: "⚛",
    "Next.js": "▲",
    Bootstrap: "B",
    Tailwind: "T",
    "Node.js": "N",
    Python: "Py",
    "Vue.js": "V",
    Angular: "A",
  };
  return iconMap[tech] || tech.charAt(0).toUpperCase();
};

export default function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-center`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
          <div className="relative bg-slate-800/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 dark:border-slate-700/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-white dark:text-white">
          {project.title}
        </h3>

        <p className="text-slate-300 dark:text-slate-300 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-white dark:text-white font-semibold">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  techStackColors[tech] || "bg-slate-600 text-white"
                }`}
              >
                <span className="mr-2 font-bold">{getTechStackIcon(tech)}</span>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Case Study Link */}
        <Button
          asChild
          variant="outline"
          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200 group"
        >
          <a href={project.caseStudyUrl}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </Button>
      </div>
    </div>
  );
}
