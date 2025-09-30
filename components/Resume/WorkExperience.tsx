interface Experience {
  period: string;
  company: string;
  role: string;
  details: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-white">
        <span className="mr-2">💼</span> WORK EXPERIENCE
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <span className="w-16 sm:w-24 text-gray-500 dark:text-white">
              {exp.period}
            </span>
            <span className="text-blue-600 dark:text-white mr-2">
              {exp.company}
            </span>
          </div>
          <h3 className="font-medium text-custom-text dark:text-white">
            {exp.role}
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-white ml-4">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
