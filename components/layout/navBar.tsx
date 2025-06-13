import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-4 z-50">
      <nav className="rounded-full border border-gray-700/30 bg-zinc-800/10 backdrop-blur-sm container w-full mx-4 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
            
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
