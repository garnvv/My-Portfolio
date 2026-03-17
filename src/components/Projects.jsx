import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const projectsData = [
  {
    title: 'EcoSweep',
    subtitle: 'Android Application',
    description: [
      'Developed an Android application focused on smart waste management with an intuitive and responsive interface.',
      'Implemented user-friendly UI, activity-based navigation, and integrated real-time data handling with backend logic.'
    ],
    image: '/ecosweep_app.png',
    tags: ['Android', 'Java', 'Firebase'],
  },
  {
    title: 'Water FootPrint',
    subtitle: 'Android Application',
    description: [
      'Built an Android application to track and calculate daily water consumption efficiently.',
      'Designed interactive XML-based UI screens and applied OOP principles for modular and maintainable code structure.'
    ],
    image: '/water_footprint_app.png',
    tags: ['Java', 'Android SDK', 'XML'],
  },
  {
    title: 'Disaster Management System',
    subtitle: 'Desktop Application',
    description: [
      'Developed a desktop-based Disaster Management System using Python, Tkinter GUI, and SQL Server integration.',
      'Designed features to add, delete, and view disaster data with predefined/custom SQL queries and Treeview-based data display.'
    ],
    image: '/disaster_management_system.png',
    tags: ['Python', 'Tkinter', 'SQL Server'],
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group rounded-3xl overflow-hidden glass p-4 border border-glass-border shadow-2xl hover:border-primary-500/50 transition-all duration-500">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-500 font-semibold text-lg uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                </div>

                <div className="glass p-6 md:p-8 rounded-2xl border border-glass-border shadow-sm">
                  <ul className="space-y-4">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-slate-200/50 dark:bg-slate-800/50 text-foreground text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
