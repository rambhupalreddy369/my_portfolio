"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { ArrowRight } from "lucide-react";

export default function MainContent() {
  const projects = [
    {
      id: 1,
      title: "Trading App Lorem",
      description:
        "Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus nunc, fringilla ut viverra ut, placerat sed nisl. Ut eu nisl ut arcu volutpat vehicula.",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["JavaScript", "React", "Bootstrap"],
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "Smart TV App",
      description:
        "A comprehensive smart TV application with streaming capabilities, user management, and content recommendation system built with modern technologies.",
      image:
        "https://images.pexels.com/photos/1201989/pexels-photo-1201989.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: ["TypeScript", "Next.js", "Tailwind"],
      caseStudyUrl: "#",
    },
  ];

  return (
    <main className="flex-1 lg:ml-0">
      {/* Hero Section */}
      <section className="relative py-16 px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-slate-600/50 dark:border-slate-600/50 light:border-slate-300/80 shadow-2xl transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-6 transition-colors duration-300">
              My Projects
            </h1>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 transition-colors duration-300">
              Intro about projects goes here. Need help with your project? Book
              a free session with me to discuss your specific project
              requirements and how I can help you.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Start A Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 lg:gap-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
