/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  Terminal,
  ExternalLink,
  ChevronRight,
  Download
} from 'lucide-react';

// Image de profil (Chemin local avec secours pour l'aperçu)
const PROFILE_IMAGE = "/mushota.png";
const FALLBACK_IMAGE = "https://drive.google.com/uc?export=download&id=11b0ktr8i4tsXWsqVOyYfMGGCg7jIJJHu";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-bg-darker/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold tracking-tighter"
      >
        Portfolio<span className="text-accent">.</span>
      </motion.div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:w-1/2 space-y-6"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-accent">Hello, It's Me</h3>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Mushota Raphael</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          And I'm a <span className="text-accent text-glow">Backend Developer</span>
        </h2>
      </div>
      <p className="text-gray-400 max-w-lg leading-relaxed">
        Expert in building scalable APIs, microservices, and event-driven architectures. 
        Passionate about performance optimization and high-availability systems.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: 'https://github.com/mushota09/' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/raph-mushota-ab8925378' },
          { icon: Mail, href: 'mailto:mushota09@gmail.com' }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 242, 255, 0.1)' }}
            className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent"
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-bg-darker px-8 py-3 rounded-full font-bold shadow-lg shadow-accent/20 flex items-center gap-2"
      >
        <Download size={18} />
        Download CV
      </motion.button>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative"
    >
      <div className="relative w-72 h-80 md:w-96 md:h-[450px]">
        <div className="absolute inset-0 bg-accent hexagon-clip opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-accent hexagon-clip glow-cyan z-10"></div>
        <img 
          src={PROFILE_IMAGE} 
          alt="Mushota Raphael"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover hexagon-clip relative z-0 hover:scale-105 transition-all duration-500 brightness-110 contrast-110 saturate-110"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-bg-dark">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <div className="relative w-64 h-72 md:w-80 md:h-96 mx-auto">
          <div className="absolute inset-0 border-4 border-accent hexagon-clip glow-cyan z-10"></div>
          <img 
            src={PROFILE_IMAGE} 
            alt="About Me"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            className="w-full h-full object-cover hexagon-clip brightness-110 contrast-110 saturate-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2 space-y-6"
      >
        <h2 className="text-4xl font-bold">About <span className="text-accent">Me</span></h2>
        <h3 className="text-2xl font-semibold">Backend Developer!</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a dedicated Backend Engineer with a strong focus on building robust and scalable server-side applications. 
          With expertise in modern frameworks like Django, FastAPI, and Node.js, I specialize in designing 
          efficient database schemas and implementing complex business logic.
        </p>
        <p className="text-gray-400 leading-relaxed">
          My experience extends to DevOps practices, ensuring seamless deployment and monitoring of applications 
          using Docker, Nginx, and CI/CD pipelines. I thrive in challenging environments where I can apply 
          architectural patterns like Microservices and Event-Driven Design.
        </p>
        <motion.button
          whileHover={{ x: 10 }}
          className="text-accent font-bold flex items-center gap-2 border-b border-accent pb-1"
        >
          Read More <ChevronRight size={18} />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const SkillCard = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-bg-darker p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-bg-darker transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
          <div className="w-1 h-1 bg-accent rounded-full"></div>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Our <span className="text-accent">Services</span></h2>
      <div className="w-20 h-1 bg-accent mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCard 
        title="Backend & API" 
        icon={Server}
        skills={["Django & DRF", "FastAPI", "Node.js & Express"]} 
      />
      <SkillCard 
        title="Databases" 
        icon={Database}
        skills={["PostgreSQL (ACID)", "MySQL (CRUD)", "MongoDB (NoSQL)"]} 
      />
      <SkillCard 
        title="Caching & Messaging" 
        icon={Cpu}
        skills={["Redis (Cache/Rate Limit)", "Kafka (Event-Driven)"]} 
      />
      <SkillCard 
        title="Architecture" 
        icon={Layers}
        skills={["Microservices", "Multi-tenancy", "RBAC & JWT Auth"]} 
      />
      <SkillCard 
        title="DevOps" 
        icon={Terminal}
        skills={["Docker & Compose", "Nginx Proxy", "CI/CD Pipelines"]} 
      />
      <SkillCard 
        title="Infrastructure" 
        icon={Terminal}
        skills={["Linux Management", "Monitoring & Logging", "Load Balancing"]} 
      />
    </div>
  </section>
);

const ProjectCard = ({ title, category, image }: { title: string, category: string, image: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative group overflow-hidden rounded-2xl aspect-video"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
      <p className="text-accent text-sm font-medium mb-1">{category}</p>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex gap-3">
        <button className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-bg-darker transition-colors">
          <Github size={18} />
        </button>
        <button className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-bg-darker transition-colors">
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-bg-dark">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Latest <span className="text-accent">Projects</span></h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="E-commerce API" 
          category="Backend / Django" 
          image="https://picsum.photos/seed/project1/800/600" 
        />
        <ProjectCard 
          title="Real-time Chat" 
          category="Microservices / Kafka" 
          image="https://picsum.photos/seed/project2/800/600" 
        />
        <ProjectCard 
          title="Analytics Dashboard" 
          category="Fullstack / Node.js" 
          image="https://picsum.photos/seed/project3/800/600" 
        />
        <ProjectCard 
          title="Auth Service" 
          category="Security / FastAPI" 
          image="https://picsum.photos/seed/project4/800/600" 
        />
        <ProjectCard 
          title="Multi-tenant SaaS" 
          category="Architecture / PostgreSQL" 
          image="https://picsum.photos/seed/project5/800/600" 
        />
        <ProjectCard 
          title="DevOps Pipeline" 
          category="Infrastructure / Docker" 
          image="https://picsum.photos/seed/project6/800/600" 
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Contact <span className="text-accent">Me!</span></h2>
      <div className="w-20 h-1 bg-accent mx-auto"></div>
    </div>
    <div className="max-w-3xl mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="tel" 
            placeholder="Mobile Number" 
            className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
          />
          <input 
            type="text" 
            placeholder="Email Subject" 
            className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
          />
        </div>
        <textarea 
          placeholder="Your Message" 
          rows={6}
          className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors resize-none"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent text-bg-darker font-bold py-4 rounded-xl shadow-lg shadow-accent/20"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-bg-darker">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-sm">
        Copyright © 2025 by Mushota Raphael | All Rights Reserved.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/mushota09/" className="text-gray-500 hover:text-accent transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/raph-mushota-ab8925378" className="text-gray-500 hover:text-accent transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:mushota09@gmail.com" className="text-gray-500 hover:text-accent transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-bg-darker">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
