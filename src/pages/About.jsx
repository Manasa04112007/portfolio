import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center py-16 px-8">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-black mb-8 animate__animated animate__fadeIn">
          About Me
        </h1>

        {/* Profile Picture */}
        <div className="mb-12">
          <img
            src="/assets/images.jpg" // Image now stored in the public/assets folder
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover shadow-xl mx-auto mb-6 border-4 border-black"
          />
        </div>

        {/* Description */}
        <p className="text-xl text-black mb-6 px-6">
          I am currently studying a Diploma in Computer Science and Engineering at KPT College, Mangalore.
        </p>

        <p className="text-xl text-black mb-6 px-6">
          I enjoy building websites and solving problems. I'm always eager to learn new technologies and improve my skills.
        </p>

        <p className="text-xl text-black mb-6 px-6">
          In my free time, I love listening to music and drawing.
        </p>
      </div>
    </div>
  );
}

export default About;
