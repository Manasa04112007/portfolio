import React from 'react';
import 'animate.css';  // Import Animate.css

function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center py-20 px-4">
      <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-col items-center max-w-3xl w-full space-y-6">
        {/* Top Section (Image) */}
        <div className="animate__animated animate__zoomIn animate__delay-1.5s">
          <img
            src="/assets/images.jpg" // Your image path here
            alt="Manasa"
            className="rounded-full shadow-lg w-48 h-48 object-cover mb-6"
          />
        </div>

        {/* Bottom Section (Text Content) */}
        <div className="text-center flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-black animate__animated animate__fadeIn animate__delay-0.5s">
            Hi, I’m Manasa R
          </h1>
          <p className="text-lg text-black animate__animated animate__fadeIn animate__delay-1s">
            I’m passionate about building websites and love solving problems. I’m always eager to learn new technologies and improve my skills.
          </p>

          <div className="space-x-4">
            <a
              href="/about"
              className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              About Me
            </a>
            <a
              href="/skills"
              className="inline-block border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
            >
              My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
