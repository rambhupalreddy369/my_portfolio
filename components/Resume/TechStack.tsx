interface TechStackProps {
  skills: string[];
}

const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-custom-text dark:text-white">
        <span className="mr-2 text-2xl">⚙️</span> TECH STACK
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-custom-text dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
  {
    /* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3">
    <div
      className="bg-blue-600 dark:bg-blue-500 h-2 sm:h-3 rounded-full"
      style={{
        width: index < 2 ? "100%" : index === 2 ? "75%" : "50%",
      }}
    ></div>
  </div> */
  }
};

export default TechStack;
