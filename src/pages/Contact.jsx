import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_g7o6t2t", // replace with your EmailJS service ID
          "template_9aj0rql", // replace with your EmailJS template ID
          templateParams,
          "En8vinxDQ0mmoKI9j" // replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Failed to send message, please try again.");
          }
        );
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-blue-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-6 text-blue-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Reach out for any inquiries or questions. We'd love to hear from you.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-blue-600 border-0 py-3 px-10 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {showPopup && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg">
            <p>Message sent successfully!</p>
          </div>
        )}

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a href="mailto:manasarameshb@gmail.com" className="text-blue-500">
            manasarameshb@gmail.com
          </a>
          <p className="leading-normal my-5 text-gray-600">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a
              href="https://github.com/Manasa04112007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
              aria-label="GitHub"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/Manasa"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-500 hover:text-blue-600"
              aria-label="Twitter"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
