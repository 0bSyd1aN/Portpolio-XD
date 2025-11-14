/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const skillsData = [
  { title: "Core", skills: ["SQL (joins, aggregations, indexing, optimization)", "SparkSQL", "Python"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "DBMS concepts"] },
  { title: "Programming", skills: ["C", "C++", "JavaScript"] },
  { title: "Web Development", skills: ["React", "Node.js", "Express.js", "HTML", "CSS"] },
  { title: "Concepts", skills: ["Data Structures & Algorithms", "OOPS", "Debugging"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <span className="text-cyan-400">//</span> Core Matrix
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gray-950 rounded-lg shadow-xl border border-gray-700/50 hover:border-cyan-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm font-medium">
                    <svg className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;