/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const extracurriculars = [
    "Organized and participated in multiple eSports tournaments at college events, managing logistics and team coordination.",
    "Coordinated a college-level treasure hunt with 80+ participants, designing challenges and ensuring smooth execution.",
    "Volunteered at a government school, teaching Science and Mathematics to students, improving engagement and understanding through interactive methods.",
];

const contactInfo = {
    phone: "+91-9535993269",
    email: "sujanrv99@gmail.com",
    location: "Srinivaspur, Kolar",
};

const FooterSection = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800">
            <div className="container mx-auto px-4 max-w-6xl py-16">
                
                {/* Extracurriculars Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-20"
                >
                    <motion.h2
                        className="text-4xl font-extrabold text-center text-white mb-10"
                    >
                        // <span className="text-cyan-400">Extracurriculars</span>
                    </motion.h2>
                    <ul className="space-y-6 text-gray-400 max-w-4xl mx-auto">
                        {extracurriculars.map((activity, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start text-lg p-4 bg-gray-900 rounded-lg border-l-4 border-cyan-600 shadow-md"
                            >
                                <svg className="w-6 h-6 mr-4 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                {activity}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div 
                    id="contact"
                    className="text-center border-t border-gray-800 pt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-extrabold mb-6 text-white">
                        Access Terminal
                    </h3>
                    <div className="flex justify-center space-x-8 mb-8">
                        <motion.a href={`mailto:${contactInfo.email}`} whileHover={{ scale: 1.1 }} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Mail className="w-6 h-6 mr-2" />
                            {contactInfo.email}
                        </motion.a>
                        <motion.span className="flex items-center text-gray-500">
                            <Phone className="w-6 h-6 mr-2" />
                            {contactInfo.phone}
                        </motion.span>
                        <motion.span className="flex items-center text-gray-500">
                            <MapPin className="w-6 h-6 mr-2" />
                            {contactInfo.location}
                        </motion.span>
                    </div>
                    
                    <div className="space-x-6 text-gray-400 mb-8">
                        <motion.a href="#" target="_blank" whileHover={{ scale: 1.2, color: '#0077B5' }} className="hover:text-cyan-500 transition-colors">
                           <Linkedin className="w-8 h-8 inline-block" />
                        </motion.a>
                        <motion.a href="#" target="_blank" whileHover={{ scale: 1.2 }} className="hover:text-cyan-500 transition-colors">
                            <Github className="w-8 h-8 inline-block" />
                        </motion.a>
                    </div>

                    <p className="text-sm text-gray-600 mt-10">
                        Portfolio Data Stream Secured. &copy; {new Date().getFullYear()} Sujan R V.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterSection;