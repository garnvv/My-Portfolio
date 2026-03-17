import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-4">
              Hello, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Gaurav Patil
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-8 h-12">
              <span className="text-slate-500 dark:text-slate-400 mr-2">I'm a </span>
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Android Developer',
                  2000,
                  'Web Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary-500"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0">
              Passionate about building seamless mobile and web applications that solve real-world problems. Based in Pune, India.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
              >
                View Projects
              </a>
              <a 
                href="/GAURAV_PATIL_Resume.pdf" 
                download
                className="px-8 py-3 rounded-full glass font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-6">
              <SocialLink href="https://www.linkedin.com/in/gaurav-patil-25b879282/" icon={<Linkedin size={24} />} />
              <SocialLink href="https://github.com/garnvv" icon={<Github size={24} />} />
              <SocialLink href="mailto:gauravnpatil2005@gmail.com" icon={<Mail size={24} />} />
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Background Blur/Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Image Container with 3D Tilt Effect */}
              <motion.div 
                className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden glass"
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src="/profile.png" 
                  alt="Gaurav Patil" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);
