import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Doran Homes Design"
                width={200}
                height={60}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-light tracking-tight">
              Home
            </Link>
            <Link href="/theproperty" className="text-gray-700 hover:text-gray-900 font-light tracking-tight">
              The Property
            </Link>
            <Link href="/units" className="text-gray-700 hover:text-gray-900 font-light tracking-tight">
              Layout
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-light tracking-tight">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-light tracking-tight">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
