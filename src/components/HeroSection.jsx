/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HeroSection = () => {
  // CLEANED STRINGS: No citation tags or prefixes
  const name = "Sujan R V";
  const specialty = "Computer Science graduate specializing in SQL, SparkSQL, and Python with strong foundations in data structures and algorithms.";
  const experience = "Experienced in designing optimized queries, building scalable data-driven applications, and applying Python for automation and analytics.";
  const goal = "Seeking a Data Engineer / SQL Developer / Python Developer role to leverage database expertise and analytical skills.";

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 pb-16 overflow-hidden bg-gray-950"
    >
      {/* Background Grid - Futuristic Effect */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #0f172a 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #0f172a 2px, transparent 2px, transparent 10px)',
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent z-10" />

      <motion.div
        className="relative z-20 max-w-4xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h4
          variants={itemVariants}
          className="text-lg font-medium text-cyan-400 mb-2 tracking-wider"
        >
          Initiating Data Protocol
        </motion.h4>
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl font-extrabold text-white mb-4 leading-tight"
        >
          {name}
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto"
        >
          {specialty}
        </motion.p>
        
        <motion.p
          variants={itemVariants}
          className="text-md text-gray-500 mb-8 max-w-3xl mx-auto italic"
        >
          {experience}
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="#contact"
          className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105"
        >
          {goal.split('Seeking a ')[1]}
        </motion.a>

      </motion.div>
    </section>
  );
};

export default HeroSection;