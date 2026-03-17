import { motion } from 'framer-motion';
import { Trophy, Star, BookOpen, Quote } from 'lucide-react';

const achievementsData = [
  {
    text: 'Successfully concluded industrial training with commendation for technical proficiency and project execution.',
    icon: <Trophy className="text-yellow-500" size={24} />,
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    text: 'Contributed to college technical events and workshops as volunteer and active participant.',
    icon: <Star className="text-blue-500" size={24} />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    text: 'Continuously learning emerging technologies through online certifications and self-directed practical projects.',
    icon: <BookOpen className="text-green-500" size={24} />,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    text: 'Published research paper titled "Power Generation Through Rolling Mechanism and Automation" in International Journal of Advance Research and Innovative Ideas in Education (IJARIIE).',
    icon: <Quote className="text-purple-500" size={24} />,
    color: 'from-purple-500/20 to-pink-500/20'
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Key <span className="text-primary-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-glass-border hover:border-primary-500/50 transition-all flex items-start gap-6 shadow-sm group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-background border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              
              <div className="flex-1 mt-1">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
