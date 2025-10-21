import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">© 2024 Doran Homes</h3>
            <p className="text-gray-400 text-sm">
              3 Carrer d&apos;Alhaueth, Ibiza, Spain 07800
            </p>
            <div className="mt-4">
              <Link href="/privacy-policy-1" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div></div>
          <div className="text-right">
            <h3 className="font-bold mb-4">Follow</h3>
            <div className="flex justify-end space-x-4">
              <a
                href="https://www.instagram.com/doranhomesdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://m.facebook.com/people/DORAN-HOMES/100046870542729/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
