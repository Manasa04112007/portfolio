import React from 'react'; // Import React to use JSX

function Footer() {
  return (
    <footer className="bg-black text-white body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Custom Logo Section (replacing Tailblocks logo) */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            {/* Custom Logo (You can replace this SVG with your custom logo) */}
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-lg text-white font-bold">MR</span> {/* Replace with your custom text or logo */}
            </div>
            <span className="ml-3 text-xl text-white">Manasa R Portfolio</span>
          </a>
          <p className="mt-2 text-sm text-gray-300">Building innovative solutions with code and design</p>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
            <nav className="list-none mb-10">
              <li><a className="text-white hover:text-gray-400" href="/about">About Me</a></li>
              <li><a className="text-white hover:text-gray-400" href="/projects">Projects</a></li>
              <li><a className="text-white hover:text-gray-400" href="/skills">Skills</a></li>
              <li><a className="text-white hover:text-gray-400" href="/contact">Contact</a></li>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Follow Me</h2>
            <nav className="list-none mb-10">
              <li><a className="text-white hover:text-gray-400" href="https://www.linkedin.com/in/manasa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="text-white hover:text-gray-400" href="https://github.com/Manasa04112007" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="text-white hover:text-gray-400" href="https://twitter.com/Manasa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a className="text-white hover:text-gray-400" href="https://www.instagram.com/Manasa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Stay Updated</h2>
            <form className="mb-10">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded text-black"/>
              <button type="submit" className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">© 2025 Manasa R | All Rights Reserved</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Social Media Icons */}
            <a className="text-white" href="https://www.linkedin.com/in/manasa" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white" href="https://github.com/Manasa04112007" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white" href="https://twitter.com/Manasa" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white" href="https://www.instagram.com/Manasa" target="_blank" rel="noopener noreferrer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
