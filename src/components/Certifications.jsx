import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

const certificationsData = [
  {
    title: 'Data Analytics, Cyber Security, Software',
    issuer: 'Deloitte Australia (Virtual Job Simulation)',
    date: '2023 - 2024',
    description: [
      'Completed industry-based virtual simulations focusing on data analysis, cyber security concepts, and real-world software development tasks.'
    ],
    links: [
      { label: 'Technology', url: '/Deloitte(Technology).pdf' },
      { label: 'Cyber Security', url: '/Deloitte(Cyber).pdf' },
      { label: 'Data Analytics', url: '/Deloitte(Data).pdf' }
    ],
    icon: <Award className="text-blue-500" size={32} />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Software Engineering Virtual Experience',
    issuer: 'JP Morgan Chase and Co.',
    date: '2023',
    description: [
      'Completed virtual experience program involving software development tasks and problem-solving exercises.'
    ],
    links: [
      { label: 'View Certificate', url: '/JPMorgan(Softwarew Simulation).pdf' }
    ],
    icon: <Award className="text-purple-500" size={32} />,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Java Basic & SQL Basic Certifications',
    issuer: 'HackerRank',
    date: '2023',
    description: [
      'Validated proficiency in Java programming fundamentals, object-oriented concepts, and foundational SQL database operations.'
    ],
    links: [
      { label: 'Java Certificate', url: '/HakerRank(JAVA).pdf' },
      { label: 'SQL Certificate', url: '/HakerRank(SQL).pdf' }
    ],
    icon: <Award className="text-green-500" size={32} />,
    color: 'from-green-500/20 to-emerald-500/20'
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Licenses & <span className="text-primary-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group border border-glass-border hover:border-primary-500/50 transition-all shadow-sm flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110`}></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-background rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                {cert.issuer}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {cert.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                {cert.links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-colors group/link"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
