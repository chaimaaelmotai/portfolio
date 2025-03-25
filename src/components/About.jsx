import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: 'Full Stack Development Training',
      company: 'EFET School',
      period: '2023 - 2025',
      description: 'Currently pursuing comprehensive training in full stack development, focusing on modern web technologies and best practices.',
      icon: <FaGraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Frontend Development',
      company: 'EFET School Projects',
      period: '2023 - 2025',
      description: 'Developing responsive and interactive web applications using HTML, CSS, JavaScript, and modern frameworks.',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      title: 'Backend Development',
      company: 'EFET School Projects',
      period: '2023 - 2025',
      description: 'Building server-side applications and APIs using various technologies and databases.',
      icon: <FaLaptopCode className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am a passionate Full Stack Developer currently in training with 2 years of experience in web development through academic projects. My journey in web development combines theoretical knowledge with practical project experience, focusing on both front-end and back-end technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2+</h3>
            <p className="text-gray-600 dark:text-gray-300">Years of Training</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLaptopCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-300">School Projects</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack</h3>
            <p className="text-gray-600 dark:text-gray-300">Development Focus</p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 