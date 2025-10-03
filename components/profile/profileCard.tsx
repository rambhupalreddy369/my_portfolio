import Image from "next/image";

// components/ProfileCard.tsx
interface ProfileCardProps {
  name: string;
  image: string;
  description: string;
  resumeLink?: string;
  highlightLinks?: { label: string; href: string }[];
}
export default function ProfileCard({
  name,
  image,
  description,
  resumeLink = "#",
  highlightLinks = [],
}: ProfileCardProps) {
  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 w-full text-center transition-colors duration-300">
        {/* Profile Image */}
        <div className="flex justify-center -mt-28">
          <Image
            src={image}
            alt={name}
            className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-md object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
          {name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
          {description}{" "}
          {highlightLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >
              {link.label}
            </a>
          ))}
        </p>

        {/* Button */}
        {resumeLink && (
          <div className="mt-6">
            <a
              href={resumeLink}
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition shadow"
            >
              View Resume
              <span className="ml-2">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
