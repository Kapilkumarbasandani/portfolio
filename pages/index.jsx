import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Hero3D from '@/components/portfolio/Hero3D';
import ProjectCard from '@/components/portfolio/ProjectCard';
import SkillOrb from '@/components/portfolio/SkillOrb';
import ContactForm from '@/components/portfolio/ContactForm';

const projects = [
  {
    title: 'Nebula Dashboard',
    description: 'A sophisticated analytics platform with real-time data visualization and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['React', 'Three.js', 'D3.js', 'Node.js'],
    year: '2024',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Aurora E-Commerce',
    description: 'Premium online shopping experience with immersive 3D product previews and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    year: '2024',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Quantum Finance',
    description: 'Fintech application for portfolio management with advanced algorithmic trading features.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    tech: ['TypeScript', 'Python', 'TensorFlow', 'AWS'],
    year: '2023',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pulse Health',
    description: 'Healthcare platform connecting patients with providers through telemedicine and AI diagnostics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tech: ['React Native', 'GraphQL', 'MongoDB', 'Docker'],
    year: '2023',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const skills = [
  { name: 'React', icon: '⚛️', level: 95 },
  { name: 'TypeScript', icon: '📘', level: 90 },
  { name: 'Node.js', icon: '🟢', level: 88 },
  { name: 'Three.js', icon: '🎨', level: 85 },
  { name: 'Python', icon: '🐍', level: 82 },
  { name: 'AWS', icon: '☁️', level: 80 },
  { name: 'GraphQL', icon: '◈', level: 85 },
  { name: 'Docker', icon: '🐳', level: 78 },
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
          <Hero3D />
        </Suspense>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
              <span className="block">Crafting Digital</span>
              <span className="block mt-2 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              I transform ideas into immersive digital products, 
              blending cutting-edge technology with elegant design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#e5c04b] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#d4af37] text-sm font-medium tracking-[0.3em] uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 tracking-tight">
                Passionate about creating
                <span className="text-[#d4af37]"> meaningful</span> experiences
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  With over 2 years of experience in digital product development, 
                  I specialize in creating immersive web experiences that push the 
                  boundaries of what's possible in the browser.
                </p>
                <p>
                  My approach combines technical expertise with a deep understanding 
                  of user psychology, ensuring every project not only looks stunning 
                  but delivers real value.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">10+</div>
                  <div className="text-sm text-white/40 mt-1">Projects</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">2+</div>
                  <div className="text-sm text-white/40 mt-1">Years Exp.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d4af37]/20 to-transparent"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <img
                  src="/kapil.jpg"
                  alt="Profile"
                  className="relative rounded-3xl object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-sm text-white/80">Bengaluru, India</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#0f0f0f] to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4af37] text-sm font-medium tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Selected <span className="text-[#d4af37]">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#d4af37] text-sm font-medium tracking-[0.3em] uppercase">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Technical <span className="text-[#d4af37]">Skills</span>
            </h2>
          </motion.div>

          {/* Skills Orbit - Desktop */}
          <div className="hidden md:block relative h-[400px]">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-[#e5c04b] flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl font-bold text-black">JS</span>
            </motion.div>
            
            {skills.map((skill, index) => (
              <SkillOrb key={skill.name} skill={skill} index={index} total={skills.length} />
            ))}
          </div>

          {/* Skills Grid - Mobile */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0f0f0f] flex items-center justify-center text-xl">
                  {skill.icon}
                </div>
                <div>
                  <div className="font-medium text-white">{skill.name}</div>
                  <div className="text-sm text-[#d4af37]">{skill.level}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4af37] text-sm font-medium tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Let's Work <span className="text-[#d4af37]">Together</span>
            </h2>
            <p className="text-white/50 mt-6 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message 
              and let's create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Email</div>
                    <div className="text-white">kkbasandani74@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Location</div>
                    <div className="text-white">Bengaluru, India</div>
                  </div>
                </div>
              </motion.div>

              <div className="pt-8 border-t border-white/5">
                <div className="text-sm text-white/40 mb-4">Connect</div>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Kapilkumarbasandani' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/kapilbasandani' },
                    { icon: Twitter, href: '#' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2024 Portfolio. All rights reserved.
          </div>
          <div className="text-white/40 text-sm">
            Designed & Built with passion
          </div>
        </div>
      </footer>
    </div>
  );
}
