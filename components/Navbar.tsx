// components/Navbar.tsx

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  px-8 bg-gray-300 text-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logoo.png" alt="Logo" width={90} height={90} />
        <span className="ml-3 text-xl mr-4 font-extrabold text-cyan-900"></span>
      </div>

      {/* Right: Icons */}
      <div className="flex space-x-4 mr-7 ">
        <Link href="https://github.com/your-profile" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-400 text-gray-900 " />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/your-profile" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-400 text-blue-300" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
