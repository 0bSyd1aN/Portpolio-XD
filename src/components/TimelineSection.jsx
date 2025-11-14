/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const timelineData = [

  {
    date: "2018-2020",
    title: "PCMB - PUC",
    institution: "Sahyadri PU College, Kolar",
    details: "Percentage: 89.33%",
    color: "emerald",
  },
    {
    date: "Jan 2020 - Aug 2024",
    title: "B.E. Computer Science & Engineering",
    institution: "RV College of Engineering, Bangalore",
    details: "GPA: 8.17",
    color: "cyan",
  },
  {
    date: "Jun 2023 - Sep 2023",
    title: "Joy of Computing with Python",
    institution: "NPTEL Certification",
    details: "Completed advanced training in Python for computational problems.",
    color: "blue",
  },
  {
    date: "Oct 2023 - Dec 2023",
    title: "AWS Cloud Computing Training",
    institution: "Cloudplus AI Certification",
    details: "Hands-on training in cloud services and deployment concepts.",
    color: "purple",
  },
];

const TimelineSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400">//</span> Data Pedigree
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden sm:block" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
            >
              {/* Content Box */}
              <div className={`order-1 w-full sm:w-5/12 p-6 rounded-lg shadow-xl bg-gray-950 border border-gray-800 hover:border-${item.color}-500 transition-colors duration-300`}>
                <h3 className="mb-2 font-extrabold text-xl text-white">{item.title}</h3>
                <p className={`text-sm mb-1 font-semibold text-${item.color}-400`}>{item.institution}</p>
                <p className="text-xs text-gray-500">{item.details}</p>
                <time className="font-mono text-xs text-gray-600 mt-2 block">{item.date}</time>
              </div>

              {/* Timeline Dot */}
              <div className="order-1 sm:w-2/12 hidden sm:flex justify-center items-center">
                <div className={`w-5 h-5 rounded-full bg-gray-700 border-4 border-gray-900 relative transition-all duration-300 group-hover:bg-${item.color}-500`} />
              </div>
              
              <div className="order-1 w-full sm:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;