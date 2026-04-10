import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Secondary Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src="/profile.jpg"
                alt="Programming"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 text-lg"
          >
            <p>
              I am a meticulous and dedicated <strong className="text-foreground font-semibold">Software Developer</strong> with a keen eye for crafting engaging digital experiences. Over the course of my career and education, I have developed a strong foundation in both Android application development and dynamic web solutions.
            </p>
            <p>
              My passion lies in taking complex problems and transforming them into beautiful, intuitive, and performant tech solutions. I strongly believe that great software not only functions perfectly under the hood but also resonates intuitively with its end-users.
            </p>
            <p>
              I am continuously exploring new technologies, participating in hackathons, and optimizing performance. When I'm not writing code, you'll find me researching system architectures, reading up on the latest tech trends, or working on open-source initiatives to solve real-world problems.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="glass px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold text-primary-500 mb-1">5+</span>
                <span className="text-sm font-medium">Projects</span>
              </div>
              <div className="glass px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold text-purple-500 mb-1">100%</span>
                <span className="text-sm font-medium">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
