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
    <div className="text-center mb-8 ">
      <div className="flex justify-center -mt-28">
        <Image
          src="/images/portfolio_pic.png"
          alt="Profile"
          width={96}
          height={96}
          className="w-40 h-40 rounded-full shadow-md object-cover mb-4 border-4 border-white dark:border-gray-800"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-custom-text dark:text-white mb-1">
        {name}
      </h1>
      <p className="text-base md:text-lg text-gray-600 dark:text-white mb-3">
        {title}
      </p>
      <hr className="border-gray-300 dark:border-gray-700 mb-2" />
      <div className="flex flex-col sm:flex-row sm:justify-around  items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-500 dark:text-white mb-3 text-center">
        <div>{contact.phone}</div>
        <span>{contact.email}</span>
        <span>{contact.website}</span>
      </div>
      <hr className="border-gray-300 dark:border-gray-700 mb-1" />
    </div>
  );
};

export default Header;
