interface AboutMeProps {
  summary: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ summary }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-white">
        <span className="mr-2">👤</span> ABOUT ME
      </h2>
      <p className="text-base sm:text-lg text-gray-700 dark:text-white">
        {summary}
      </p>
    </div>
  );
};

export default AboutMe;
