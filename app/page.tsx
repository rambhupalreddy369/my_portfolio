"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  PenTool,
  FileText,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Palette,
  Database,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import ProfileCard from "@/components/profile/profileCard";
import SidebarMenu from "@/components/SidebarMenu";
import Header from "@/components/Header";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: "about", icon: User, label: "About Me" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "blog", icon: PenTool, label: "Blog" },
    { id: "resume", icon: FileText, label: "Resume" },
    { id: "contact", icon: MessageCircle, label: "Contact" },
  ];

  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "React", level: 85, color: "bg-blue-500" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-blue-600" },
    { name: "TypeScript", level: 85, color: "bg-blue-700" },
    { name: "Next.js", level: 80, color: "bg-black" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to manage state and side effects in functional components.",
      date: "2024-01-15",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices for creating robust and scalable REST APIs using Node.js and Express.",
      date: "2024-01-10",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt:
        "Explore modern CSS features like Grid, Flexbox, and custom properties to create stunning layouts.",
      date: "2024-01-05",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for multiple client projects using React, TypeScript, and modern web technologies.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications using MERN stack, collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built responsive websites and web applications, gained experience in various frontend and backend technologies.",
    },
  ];

  const renderContent = () => {
    console.log(activeSection);
    switch (activeSection) {
      case "about":
        return (
          <div>
            <ProfileCard
              name="Rambhupal Reddy"
              image="/daniel.jpg"
              description="Hi! I’m a Senior Developer with more than ten years of experience working in mobile banking apps."
              resumeLink="/resume-daniel.pdf"
              // highlightLinks={[
              //   { label: "latest projects", href: "/projects" },
              //   { label: "case studies", href: "/case-studies" },
              // ]}
            ></ProfileCard>
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="text-center lg:text-left">
                <div className="flex flex-col lg:flex-col items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
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
                      I'm a passionate full-stack developer with 3+ years of
                      experience creating beautiful, functional, and
                      user-centered digital experiences. I love solving complex
                      problems and learning new technologies.
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
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
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

      case "projects":
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
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
                            <a href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl}>
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case "blog":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Blog Posts
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I write about web development, programming, and technology
                trends.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 mt-4">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "resume":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Resume
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Download my resume or view my qualifications below.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                Download PDF Resume
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        University of Technology
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        2015 - 2019
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Full Stack Web Development
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        Coding Bootcamp
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        2019
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">AWS Certified Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        Amazon Web Services
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        2023
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        React Developer Certification
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">Meta</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        2022
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I'd love to hear from you. Send me a message and I'll respond as
                soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Follow Me</h4>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href="#">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="#">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="#">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input placeholder="Message subject" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea placeholder="Your message..." rows={5} />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  const handleChildAction = (value: string) => {
    setActiveSection(value);
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
      ></Header>
      <div className="flex">
        <SidebarMenu
          isOpen={isSidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          activeSection={handleChildAction}
        ></SidebarMenu>
        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Page Content */}
          <main className="p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
