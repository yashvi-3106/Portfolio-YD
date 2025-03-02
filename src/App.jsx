import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail, Code, Database, Server, Layout, Globe, GitBranch, Terminal, Box, Palette, Monitor } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ icon: Icon, name }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex flex-col items-center gap-2"
  >
    <Icon className="w-6 h-6 mb-1" />
    <h3 className="font-semibold text-sm">{name}</h3>
  </motion.div>
);

const ProjectCard = ({ title, description, demo, github }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex flex-col justify-between text-center w-full"
  >
    <h3 className="text-lg font-bold mb-2">{title}</h3>

    <div className="flex-grow flex items-center justify-center mb-3">
      <p className="text-gray-300 text-sm">{description}</p>
    </div>

    {/* Show video only for FocusFuze */}
    {title === 'FocusFuze' && (
      <div className="mb-3">
        <a href="https://youtu.be/pY5dqOt33Js" target="_blank" rel="noopener noreferrer">
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.youtube.com/embed/pY5dqOt33Js"
            title="FocusFuze Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </a>
      </div>
    )}

    <div className="flex gap-4 mt-auto">
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        Live Demo
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        GitHub
      </a>
    </div>
  </motion.div>
);






function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code, name: 'React' },
    { icon: Database, name: 'MongoDB' },
    { icon: Server, name: 'Node.js' },
    { icon: Terminal, name: 'Express' },
    { icon: Code, name: 'JavaScript' },
    { icon: Layout, name: 'Tailwind CSS' },
    { icon: Palette, name: 'CSS' },
    { icon: GitBranch, name: 'Git' },
    { icon: Globe, name: 'Vercel' },
    { icon: Server, name: 'Render' },
    { icon: Box, name: 'Netlify' },
    { icon: Terminal, name: 'C' },
    { icon: Palette, name: 'Figma' },
    { icon: Monitor, name: 'HTML' },
    { icon: Layout, name: 'MUI' },
  ];

  const projects = [
    {
      title: 'FocusFuze',
      description: 'FocusFuze is a full-stack task management app where users can set personal goals, create notes, and schedule events on a calendar. It helps users stay organized with features like goal tracking, task completion status, and a seamless note-taking experience. Built with React, Node.js, Express, and MongoDB, FocusFuze ensures smooth performance and an intuitive user interface. 🚀',

      demo: 'https://focuss-fuze.netlify.app/',
      github: 'https://github.com/yashvi-3106/focus_fuze'
    },
    {
      title: 'API Explorer',
      description: 'This React project integrates four APIs, allowing users to explore recipes, discover cocktails, dive into the Harry Potter universe, and access banking details. Built with React and Axios, it ensures seamless data fetching and dynamic content rendering. ',
     
      demo: 'https://peaceful-mousse-5b600d.netlify.app/',
      github: 'https://github.com/yashvi-3106/React-Route'
    },
    {
      title: 'TO DO LIST',
      description: 'This is a dynamic To-Do List app built using React that enables users to easily add and delete tasks. The app provides an intuitive interface where users can manage their tasks efficiently. It also includes a dark/light mode toggle feature, allowing users to switch between themes for a more personalized and comfortable experience.',
  
      demo: 'https://delightful-pixie-648495.netlify.app/',
      github: 'https://github.com/yashvi-3106/Todo-List-React'
    },    
    {
      title: 'FreeLancer Static Clone',
      description: 'Build a static clone of the Freelancer website using React.  Focus on creating a clean, user-friendly interface that replicates the structure and design of Freelancer without dynamic functionality.',

      demo: 'https://freelancer31.netlify.app/',
      github: 'https://github.com/yashvi-3106/Free_lancer-clone'
    },
    {
      title: 'Manage Engine Static Clone',
      description: 'Build a static landing page clone of a modern tech company website using React. The landing page should feature an engaging hero section with a call-to-action, highlights of the companys services and an attractive value proposition.',

      demo: 'https://tiny-marigold-a203d3.netlify.app/',
      github: 'https://github.com/yashvi-3106/ManageEngine'
    },
    {
      title: 'Naturals Static Clone',
      description: 'Build a static landing page clone of the Naturals Ice Cream website using only HTML and CSS. The page should feature eye-catching images of ice creams, a brief introduction to the brand and a menu section showcasing popular flavors. ',
 
      demo: 'https://naturalsicecream-cg.netlify.app/',
      github: 'https://github.com/yashvi-3106/Naturalsicecream'
    },
    {
      title: 'Better Static Clone',
      description: 'This project involves creating a pixel-perfect static clone of the Better website using HTML and CSS. The goal is to replicate the layout, design elements, and overall structure of the site, focusing on creating an attractive, user-friendly interface.  ',

      demo: 'https://better-cg.netlify.app/',
      github: 'https://github.com/yashvi-3106/better'
    },

  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            YD
          </motion.h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Yashvi Dholakiya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Full Stack Developer</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
            A passionate <span className="highlight"> Full Stack Developer </span> skilled in building dynamic and scalable web applications using{" "}
          <span className="highlight"> MongoDB, Express.js, React.js, and Node.js </span> (MERN Stack).  
          I specialize in crafting efficient server-side architectures ensuring seamless user experiences.  
          Experienced with <span className="highlight"> RESTful APIs, JavaScript (ES6+), Render, Netlify, Vercel and Git </span>, I thrive on writing optimized, clean, and high-performance code.  
          Constantly learning and evolving, I am dedicated to creating impactful web solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://www.github.com/yashvi-3106/" className="text-purple-400 hover:text-purple-300"><Github className="w-6 h-6" /></a>
              <a href="https://linkedin.com/in/yashvi-dholakiya/" className="text-purple-400 hover:text-purple-300"><Linkedin className="w-6 h-6" /></a>
              <a href="mailto: yashvidholakiya.cg@gmail.com." className="text-purple-400 hover:text-purple-300"><Mail className="w-6 h-6" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
{/* Projects Section */}
{/* Projects Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
</section>




      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-700 focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-700 focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-700 focus:border-purple-500 focus:outline-none"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;