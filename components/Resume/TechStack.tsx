interface TechStackProps {
  skills: string[];
}

const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-custom-text-dark">
        <span className="mr-2">⚙️</span> TECH STACK
      </h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-2">
          <span className="font-medium text-custom-text dark:text-custom-text-dark">
            {skill}
          </span>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 sm:h-3 rounded-full"
              style={{
                width: index < 2 ? "100%" : index === 2 ? "75%" : "50%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
