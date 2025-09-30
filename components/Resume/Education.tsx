interface EducationProps {
  degrees: string[];
}

const Education: React.FC<EducationProps> = ({ degrees }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-custom-text-dark">
        <span className="mr-2">🎓</span> EDUCATION
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {degrees.map((degree, index) => (
          <li key={index}>{degree}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
