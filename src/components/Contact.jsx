import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init("if2oJMx9IKDEcUVDv");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Chaimaa',
      reply_to: formData.email
    };

    emailjs.send(
      'service_kb40m2p',
      'template_kyoyb6s',
      templateParams
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('error');
        alert('Error details: ' + JSON.stringify(error));
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-black">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Have a question or want to work together? I'd love to hear from you.
                Send me a message and I'll respond as soon as possible.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/elmoutai-chaimaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                  <span>Elmoutai Chaimaa</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:elmoutaichaimaa@gmail.com"
                    className="text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200"
                  >
                    elmoutaichaimaa@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Phone:</span>{' '}
                  <a
                    href="tel:0628491553"
                    className="text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200"
                  >
                    0628491553
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">GitHub:</span>{' '}
                  <a
                    href="https://github.com/elmoutaichaimaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200"
                  >
                    github.com/elmoutaichaimaa
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Location:</span> Casablanca, Maroc
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
                Failed to send message. Please try again later.
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSend className="w-5 h-5" />
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 