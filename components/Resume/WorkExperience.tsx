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
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-custom-text dark:text-white">
        <span className="mr-2 text-2xl">💼</span> WORK EXPERIENCE
      </h2>
      {/* <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6 group">
            <div className="absolute -left-[9px] mt-2.5 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900 transition-transform group-hover:scale-125"></div>

            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide">
              {exp.period}
            </span>

            <div className="mt-1">
              <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-custom-text dark:text-gray-300 mb-2">
                {exp.company}
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-500/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </span>
            </div>

            <p className="text-sm font-medium text-custom-text dark:text-gray-200 mb-3">
              {exp.company}
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
