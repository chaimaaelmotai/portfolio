import { motion } from 'framer-motion';
import { FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiMongodb, SiJquery } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, level: 20 },
    { name: 'SQL', icon: <FaDatabase className="w-8 h-8" />, level: 80 },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, level: 80 },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" />, level: 70 },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" />, level: 80 },
    { name: 'PHP', icon: <FaPhp className="w-8 h-8" />, level: 50 },
    { name: 'jQuery', icon: <SiJquery className="w-8 h-8" />, level: 60 },
    { name: 'WordPress', icon: <FaWordpress className="w-8 h-8" />, level: 50 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world.
            Here are some of the key skills I've developed over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 