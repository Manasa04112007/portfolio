import React from 'react';

function Header() {
  return (
    <header className="bg-black text-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">MANASA R</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="/skills" className="text-white hover:text-blue-500">Skills</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
