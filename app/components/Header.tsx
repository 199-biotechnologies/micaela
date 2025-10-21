import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex-shrink-0">
            <Link href="/" className="transition-smooth-fast hover:opacity-70">
              <Image
                src="/images/logo.png"
                alt="Doran Homes Design"
                width={180}
                height={54}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide uppercase transition-smooth-fast relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-smooth group-hover:w-full" />
            </Link>
            <Link
              href="/theproperty"
              className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide uppercase transition-smooth-fast relative group"
            >
              The Property
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-smooth group-hover:w-full" />
            </Link>
            <Link
              href="/units"
              className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide uppercase transition-smooth-fast relative group"
            >
              Layout
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-smooth group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide uppercase transition-smooth-fast relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-smooth group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide uppercase transition-smooth-fast relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-smooth group-hover:w-full" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
