import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Gaurav Patil. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/gaurav-patil-25b879282/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/garnvv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:gauravnpatil2005@gmail.com"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
