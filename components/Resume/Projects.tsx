interface ProjectsProps {
  projects: string[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-white">
        <span className="mr-2">🌐</span> PROJECTS
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-white">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
