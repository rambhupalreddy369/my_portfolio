interface SoftSkillsProps {
  skills: string[];
}

const SoftSkills: React.FC<SoftSkillsProps> = ({ skills }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-custom-text-dark">
        <span className="mr-2">🧠</span> SOFT SKILLS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
