import Head from "next/head";
import Header from "./Header";
import AboutMe from "./About";
import WorkExperience from "./WorkExperience";
import TechStack from "./TechStack";
import SoftSkills from "./SoftSkills";
import Projects from "./Projects";
import Education from "./Education";
import Languages from "./Languages";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-[#1e2738]">
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
            <AboutMe summary="Summarise your career profile here lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
            <WorkExperience
              experiences={[
                {
                  period: "2023 - Present",
                  company: "Google",
                  role: "Tech Lead",
                  details: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta est diam, et blandit ipsum suscipit facilisis.",
                    "Vivamus accumsan purus at urna tincidunt convallis. Sed nisi dolor, elementum eget tempus ac, blandit ac mi. Aliquam id tellus ut arcu luctus accumsan in at odio.",
                  ],
                },
                {
                  period: "2019 - 2023",
                  company: "Meta",
                  role: "Senior App Developer",
                  details: [
                    "Praesent nec semper eros. Aliquam quis turpis sed metus mollis luctus vitae rhoncus mi. At vero eos et accumsamus et iusto odio dignissimos.",
                    "Proin tempus eu arcu in semper. Quisque gravida, sem ut vehicula ultricies, diam est viverra odio, eget tristique tortor sed neque.",
                  ],
                },
                {
                  period: "2017 - 2019",
                  company: "Coinbase",
                  role: "App Developer",
                  details: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Nulla velit dui, ultricies sit amet arcu eget, sodales lacinia lorem.",
                  ],
                },
              ]}
            />
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <TechStack
              skills={["JavaScript", "ReactJS", "Python", "MongoDB"]}
            />
            <SoftSkills
              skills={[
                "Leadership",
                "Project Management",
                "DevOps",
                "Public Speaking",
              ]}
            />
            <Projects projects={["Project lorem Ipsum"]} />
            <Education
              degrees={[
                "MSc in Computer Science, Oxford University, 2016 - 2017",
                "BSc Maths and Physics, University of California, Berkeley, 2012 - 2016",
              ]}
            />
            <Languages languages={["English", "Spanish"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
