

const Footer = () => {
  return (
    <div className="bg-blue-100 shadow-lg">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-50 p-6 text-center md:justify-between">
        <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          © 2023 Material Tailwind
        </p>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;