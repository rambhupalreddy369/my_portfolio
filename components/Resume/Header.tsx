import Image from "next/image";

interface Contact {
  phone: string;
  email: string;
  website: string;
}

interface HeaderProps {
  name: string;
  title: string;
  contact: Contact;
}

const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <div className="text-center mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-500 shadow-lg">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-custom-text dark:text-white mb-1">
        {name}
      </h1>
      <p className="text-base md:text-lg text-gray-600 dark:text-white mb-3">
        {title}
      </p>
      <hr className="border-gray-300 dark:border-gray-700 mb-2" />
      <div className="flex justify-around mt-2 text-sm text-gray-500 dark:text-white mb-3">
        <div>{contact.phone}</div>
        <span>{contact.email}</span>
        <span>{contact.website}</span>
      </div>
      <hr className="border-gray-300 dark:border-gray-700 mb-1" />
    </div>
  );
};

export default Header;
