interface LanguagesProps {
  languages: string[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-custom-text dark:text-custom-text-dark">
        <span className="mr-2">🌐</span> LANGUAGES
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
