import Head from "next/head";
import Header from "./Header";
import AboutMe from "./About";
import WorkExperience from "./WorkExperience";
import TechStack from "./TechStack";
import SoftSkills from "./SoftSkills";
import Projects from "./Projects";
import Education from "./Education";
import Languages from "./Languages";
import { ExperienceDetails } from "@/utils/constants/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans dark:bg-[#1e2738] rounded-lg shadow-md transition-colors duration-300">
      <Head>
        <title>Rambhupal - Resume</title>
        <meta name="description" content="Rambhupal Reddy's Resume" />
      </Head>
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Header
          name="Rambhupal Reddy"
          title="Full Stack Developer"
          contact={{
            phone: "+91 84990 15238",
            email: "rambhupalreddy369@gmail.com",
            website: "www.kvrbreddy.com",
          }}
        />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <AboutMe
              summary="Full-Stack Developer with 3+ years of experience building scalable, 
            high-performance web applications using Vue.js, Nuxt.js, Vuetify, Vuex, and Firebase. 
            Skilled in React, Redux, Node.js, and Express.js, with expertise in real-time database integration 
            and interactive data visualizations. Experienced in debugging, performance optimization, 
            and delivering seamless user experiences. Strong foundation in problem-solving, collaboration, 
            and Agile development, with a focus on developing technology-driven solutions that address complex real-world challenges."
            />
            <hr className="my-6 border-gray-300 dark:border-gray-700" />
            <WorkExperience experiences={ExperienceDetails} />
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <TechStack
              skills={[
                "JavaScript",
                "VueJs",
                "ReactJS",
                "NuxtJs",
                "NextJs",
                "Vuetify",
                "Vuex",
                "Redux",
                "NodeJs",
                "ExpressJs",
                "Bootstrap",
                "Tailwind CSS",
                "MongoDB",
                "Firebase",
                "HTML/CSS",
              ]}
            />
            <hr className="my-6 border-gray-300 dark:border-gray-700" />
            <SoftSkills
              skills={[
                "Leadership",
                "Project Management",
                // "DevOps",
                // "Public Speaking",
              ]}
            />
            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <Projects />
            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <Education
              degrees={[
                {
                  name: "B.Tech in Mechanical Engineering",
                  institution: "JNTU Hyderabad",
                  year: "2012 - 2016",
                },
              ]}
            />
            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <Languages languages={["English", "Hindi", "Telugu"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
