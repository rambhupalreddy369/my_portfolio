interface EducationProps {
  degrees: { name: string; institution: string; year: string }[];
}

const Education: React.FC<EducationProps> = ({ degrees }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-custom-text dark:text-white">
        <span className="mr-2 text-2xl">🎓</span> EDUCATION
      </h2>

      <div className="space-y-5">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="border-blue-500 hover:border-blue-400 transition-all"
          >
            <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">
              {degree.name}
            </h3>
            <p className="text-sm text-custom-text dark:text-gray-300">
              {degree.institution}
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {degree.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
