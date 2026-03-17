import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experienceData = [
  {
    title: 'Intern',
    company: 'Being Ambitious',
    date: 'November 2025 - February 2026',
    description: [
      'Contributing to live projects while collaborating with the development team.',
      'Participating in structured training covering project workflows and professional responsibilities.',
      'Enhancing technical and professional skills through real-time project exposure.'
    ],
  },
  {
    title: 'Industrial Trainee',
    company: 'I-Tech System Nashik, Maharashtra',
    date: 'July - August 2023',
    description: [
      'Finished intensive 6-week industrial training program focused on Python programming and software development.',
      'Gained hands-on experience with programming fundamentals and control structures.',
      'Developed multiple practical projects demonstrating proficiency in Python libraries and frameworks.',
      'Executed Object-Oriented Programming concepts including classes, inheritance, polymorphism, and encapsulation.'
    ],
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[8px] md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-background z-10 shadow-lg shadow-primary-500/50"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12 text-left'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl border border-glass-border hover:border-primary-500/50 transition-all shadow-sm group">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors">{exp.title}</h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium gap-2">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-slate-500 gap-2">
                        <Calendar size={14} />
                        <span className="text-sm">{exp.date}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
