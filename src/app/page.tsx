'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-text-secondary"
          >
            Hi, I'm <span className="gradient-text">Sidak Singh</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-text-primary"
          >
            Software Engineer & Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent/80 transition-colors duration-300"
            >
              Learn More
            </a>
            <a
              href="https://www.linkedin.com/in/sidakssingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-primary transition-colors duration-300"
            >
              Connect
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 animate-float"
          >
            <a href="#about" className="text-accent">
              <ArrowDownIcon className="h-8 w-8 mx-auto" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-invert"
          >
            <p className="text-lg mb-4 text-text-primary">
              I'm a passionate Software Engineer with experience in full-stack development, 
              specializing in creating efficient and scalable web applications. 
              My journey in technology has been driven by a constant desire to learn 
              and solve complex problems.
            </p>
            <p className="text-lg text-text-primary">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge with others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-text-secondary">Project Name</h3>
              <p className="text-text-primary mb-4">
                A brief description of the project and its impact.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
