import React from 'react';
import { SiPython, SiHtml5, SiScratch, SiMysql, SiGithub, SiAtlassian } from 'react-icons/si'; // Import Atlassian icon
import { motion } from 'framer-motion';

const skillIcons = {
  Python: (
    <SiPython
      title="Python"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
  HTML: (
    <SiHtml5
      title="HTML5"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
  Scratch: (
    <SiScratch
      title="Scratch"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
  SQL: (
    <SiMysql
      title="SQL"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
  GitHub: (
    <SiGithub
      title="GitHub"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
  Jira: (
    <SiAtlassian
      title="Jira"
      className="w-8 h-8 p-1 rounded-full bg-purple-200 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
    />
  ),
};

function Skills() {
  const skills = ['Python', 'HTML', 'Scratch', 'SQL', 'GitHub', 'Jira']; // Add Jira to the list of skills

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 sm:px-12 bg-gray-300 rounded-lg">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">My Skills</h1>

      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700 text-lg"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, // Stagger the child items
        }}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            className="group flex items-center cursor-pointer rounded-lg p-4 shadow-sm bg-purple-50 hover:bg-purple-200 hover:shadow-md transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }} // delay for each skill
          >
            {skillIcons[skill]} {/* Render the skill icon */}
            <span className="font-semibold ml-3 text-gray-900 group-hover:text-gray-700">
              {skill}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Skills;
