"use client";
import * as React from "react";
import { Briefcase, Code, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileCard from "@/components/profile/profileCard";
import Image from "next/image";

const About = () => {
  const experience = [
    {
      title: "Frontend Developer",
      company: "Bumps App",
      period: "Jun-2022 to Aug-2025",
      description: `Developed and maintained the Bumps App, a social networking platform, using Vue.js and Vuetify. 
        Implemented responsive designs and optimized performance for a seamless user experience.
        Collaborated with cross-functional teams to deliver high-quality features and improve user experience.`,
    },
  ];
  const skills = [
    { name: "JavaScript", level: 65, color: "bg-yellow-500" },
    { name: "TypeScript", level: 65, color: "bg-blue-700" },
    { name: "Vue.js", level: 70, color: "bg-green-400" },
    { name: "Nuxt.js", level: 70, color: "bg-green-600" },
    { name: "Vuetify", level: 80, color: "bg-teal-400" },
    { name: "React", level: 60, color: "bg-blue-500" },
    { name: "Next.js", level: 60, color: "bg-black" },
    { name: "Node.js", level: 50, color: "bg-green-500" },
    { name: "Express.js", level: 50, color: "bg-gray-700" },
    { name: "MongoDB", level: 55, color: "bg-green-800" },
    { name: "HTML/CSS", level: 85, color: "bg-orange-500" },
    { name: "Tailwind CSS", level: 50, color: "bg-green-700" },
    // { name: "Python", level: 75, color: "bg-blue-600" },
  ];

  return (
    <div>
      {/* <ProfileCard
        name="Rambhupal Reddy"
        image=""
        description="Hi! I’m a Senior Developer with more than ten years of experience working in mobile banking apps."
        resumeLink="/resume-daniel.pdf"

        // highlightLinks={[
        //   { label: "latest projects", href: "/projects" },
        //   { label: "case studies", href: "/case-studies" },
        // ]}
      ></ProfileCard> */}
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-col items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src=""
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Rambhupal Reddy Kancharla
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Iam a passionate full-stack developer with 3+ years of
                experience creating beautiful, functional, and user-centered
                digital experiences. I love solving complex problems and
                learning new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    {/* <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span> */}
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-500 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-0" />
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
