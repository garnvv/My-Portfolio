import { motion } from 'framer-motion';
import { CheckCircle2, Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'AegisGuard.AI',
    subtitle: 'Threat Intelligence Platform',
    description: [
      'Architected AegisGuard.AI, a Next-Gen Phishing & Threat Intelligence Platform.',
      'Empowers cyber defense by providing real-time threat intelligence and automated phishing detection via AI models.'
    ],
    image: '/aegisguard.png',
    tags: ['AI/ML', 'Cybersecurity', 'Web'],
    liveLink: 'https://aegisguard.vercel.app/',
    githubLink: 'https://github.com/garnvv/aegisguard'
  },
  {
    title: 'EcoSweep',
    subtitle: 'Android Application',
    description: [
      'Developed an Android application focused on smart waste management with an intuitive and responsive interface.',
      'Implemented user-friendly UI, activity-based navigation, and integrated real-time data handling with backend logic.'
    ],
    image: '/ecosweep_app.png',
    tags: ['Android', 'Java', 'Firebase'],
    githubLink: 'https://github.com/garnvv/ECOSWEEP'
  },
  {
    title: 'Disaster Management System',
    subtitle: 'Desktop Application',
    description: [
      'Developed a desktop-based Disaster Management System using Python, Tkinter GUI, and SQL Server integration.',
      'Designed a centralized database system integrating all critical aspects of disaster management for rapid response.'
    ],
    image: '/disaster_management_system.png',
    tags: ['Python', 'Tkinter', 'SQL'],
    githubLink: 'https://github.com/garnvv/Disaster-Management-System'
  },
  {
    title: 'Hotel Management System',
    subtitle: 'Desktop Application',
    description: [
      'Engineered a comprehensive hotel management system handling dynamic room bookings and cancellations.',
      'Implemented foundational data structures like linked lists to maximize efficiency when tracking records.'
    ],
    image: '/hotel_management.png',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    githubLink: 'https://github.com/garnvv/Hotel-Management-System'
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
    githubLink: 'https://github.com/garnvv' 
  },
  {
    title: 'Smart Waste Management',
    subtitle: 'Web System',
    description: [
      'System assigns dynamically reported garbage collection requests with user GPS location to municipal workers.',
      'Features automated reminders and pattern data analytics with readiness for real-time IoT continuous monitoring.'
    ],
    image: '/water_footprint_app.png',
    tags: ['GPS', 'IoT', 'Data Analytics'],
    githubLink: 'https://github.com/garnvv/Smart-Waste-Management-System'
  },
  {
    title: 'Bafna E-Bykes',
    subtitle: 'E-Commerce Platform',
    description: [
      'A sleek, responsive digital storefront developed to showcase, manage, and scale electric bicycle operations.',
      'Focuses heavily on an intuitive end-to-end shopping user experience and robust product inventory systems.'
    ],
    image: '/bafna_ebykes.png',
    tags: ['Web Development', 'E-Commerce', 'UI/UX'],
    liveLink: 'https://bafna-frontend.onrender.com/',
    githubLink: 'https://github.com/garnvv/bafna-ebykes'
  },
  {
    title: 'Brick Breaker Game',
    subtitle: 'Arcade Game',
    description: [
      'Developed a modern take on the classic arcade-style Brick Breaker game featuring dynamic physics and object collisions.',
      'Engineered robust game loops, level progression layers, and immersive graphic rendering environments.'
    ],
    image: '/brick_breaker.png',
    tags: ['Game Development', 'Java'],
    githubLink: 'https://github.com/garnvv/Brick-Breaker-Game'
  },
  {
    title: 'Tic-Tac-Toe',
    subtitle: 'Logic Game',
    description: [
      'Programmed a complete digital replication of the classic Tic-tac-toe game in a 3x3 grid layout.',
      'Implemented rigorous state-checking algorithms to dynamically determine win, lose, and draw scenarios in real-time.'
    ],
    image: '/tic_tac_toe.png',
    tags: ['Logic', 'Algorithms'],
    githubLink: 'https://github.com/garnvv/Tic-Tac-Teo'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="h-full"
            >
              <motion.div 
                whileHover={{ rotateX: 8, rotateY: -8, y: -12, scale: 1.02, z: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative flex flex-col h-full group rounded-3xl overflow-hidden glass p-8 border border-glass-border shadow-lg hover:shadow-2xl hover:shadow-primary-500/30 hover:border-primary-500/50 transition-all duration-500 cursor-pointer"
              >
                {/* Background Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 transform-style-3d group-hover:translate-z-10 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex-grow mb-8 transform-style-3d group-hover:translate-z-8 transition-transform duration-500">
                    <ul className="space-y-4">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto transform-style-3d group-hover:translate-z-12 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-slate-200/50 dark:bg-slate-800/50 text-foreground text-xs font-semibold rounded-md border border-slate-300 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 w-full">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-background border border-slate-300 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 text-foreground rounded-xl text-sm font-semibold transition-all group/btn"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/25 transition-all group/btn"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
