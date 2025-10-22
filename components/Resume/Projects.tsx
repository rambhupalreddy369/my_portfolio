const Projects: React.FC<{}> = () => {
  const ProjectsDetails = [
    {
      name: "Project Alpha",
      description:
        "A web application that allows users to track their tasks and manage projects efficiently.",
      link: " ",
    },
    {
      name: "Project Beta",
      description:
        "An e-commerce platform that provides a seamless shopping experience with advanced search and filtering options.",
      link: " ",
    },
    {
      name: "Project Gamma",
      description:
        "A social networking site that connects people with similar interests and hobbies.",
      link: " ",
    },
  ];
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-white">
        <span className="mr-2">🌐</span> PROJECTS
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-white">
        {ProjectsDetails.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
