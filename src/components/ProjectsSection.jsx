/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Attendance Management System",
    tech: "Python, SQL",
    points: [
      "Designed a normalized relational schema for managing 1,000+ student records.",
      "Wrote optimized SQL queries for absentee tracking, monthly summaries, and defaulter detection.",
      "Used indexing and joins to improve query performance by 30%.",
      "Automated reporting and analysis using Python scripts.",
      "Developed stored procedures and triggers to enforce data consistency.",
      "Built an interactive query dashboard for faculty to fetch insights quickly.",
      "Demonstrated integration of SQL with Python for end-to-end data handling.",
    ],
  },
  {
    title: "Uber Data Analytics",
    tech: "Python, GCP, BigQuery, Looker Studio",
    points: [
      "Engineered an end-to-end workflow for Uber trip data leveraging Python, GCP Storage, and Mage for orchestration.",
      "Performed data cleansing, feature extraction, and schema design before loading into BigQuery for high-performance querying.",
      "Optimized analytical queries and implemented a relational data model to support trend analysis.",
      "Designed interactive dashboards in Looker Studio to present insights on demand patterns, trip distances, and payment behavior.",
      "Utilized NYC TLC Trip Records dataset to derive actionable insights on urban mobility.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400">//</span> Project Dossiers
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 bg-gray-900 rounded-lg shadow-2xl border border-gray-700/50 flex flex-col h-full"
            >
              <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-md font-medium text-cyan-400 mb-6 border-b border-gray-800 pb-4">
                Tech Stack: {project.tech}
              </p>
              
              <ul className="space-y-4 text-gray-300 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-3 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;