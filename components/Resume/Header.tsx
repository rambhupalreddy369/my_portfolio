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
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-custom-text dark:text-custom-text-dark">
        {name}
      </h1>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
        {title}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
        <span>{contact.phone}</span>
        <span>{contact.email}</span>
        <span>{contact.website}</span>
      </div>
    </div>
  );
};

export default Header;
