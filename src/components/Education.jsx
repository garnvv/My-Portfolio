import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'SVKM’s NMIMS Mukesh Patel School of Technology Management & Engineering',
    location: 'Shirpur, Maharashtra',
    date: 'July 2024 – Present',
    description: 'Pursuing comprehensive studies in software engineering, data structures, and emerging technologies.',
    link: '/nmims_marksheet.pdf'
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'R. C. Patel Polytechnic',
    location: 'Shirpur, Maharashtra',
    date: 'August 2021 – June 2024',
    description: 'Developed foundational knowledge in programming, hardware, and computer networking.',
    link: '/diploma_marksheet.pdf'
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'A.T. Zambare High School',
    location: 'Jalgaon, Maharashtra',
    date: 'June 2021',
    description: 'Completed secondary education with strong fundamentals in mathematics and science.',
    link: '/10th_marksheet.pdf'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My <span className="text-primary-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-glass-border hover:border-primary-500/50 transition-all flex flex-col md:flex-row gap-6 shadow-sm group"
            >
              <div className="flex-shrink-0 pt-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap size={32} />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary-500 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-block text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full whitespace-nowrap self-start">
                    {edu.date}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                  {edu.description}
                </p>

                <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
                  <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors group/link"
                  >
                    <span>View Marksheet</span>
                    <ExternalLink size={16} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
