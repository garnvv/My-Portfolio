import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web Development',
    items: ['HTML/CSS', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
  },
  {
    category: 'Mobile Development',
    items: ['Android Development', 'Java (Android)', 'XML', 'Jetpack Compose'],
  },
  {
    category: 'Database & Tools',
    items: ['MySQL', 'Firebase', 'Git', 'GitHub', 'Figma', 'VS Code', 'Android Studio'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-glass-border hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground text-center">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
