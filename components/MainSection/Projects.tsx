"use client";
import { ExternalLink, Github } from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const projects = [
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
  //   image:
  //     "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description:
  //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //   image:
  //     "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 1,
    title: "Bumps App",
    description:
      "A social networking platform developed using Nuxt.js, Vue.js and Vuetify, focusing on user engagement and seamless interaction. Implemented responsive designs and optimized performance for a seamless user experience. Collaborated with cross-functional teams to deliver high-quality features and improve user experience.  ",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "Nuxt.js",
      "Vue Js",
      "Vuetify",
      "Vuex",
      "JavaScript",
      "Google Maps API",
      "Firebase",
      "Vastunario 2D force-graph",
    ],
    liveUrl: "https://bumps.app.com/",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {/* <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
