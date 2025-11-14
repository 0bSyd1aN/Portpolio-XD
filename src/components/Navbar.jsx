/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

const MobileMenu = ({ navItems, toggleMenu }) => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full left-0 right-0 border-t border-gray-700 bg-gray-900 shadow-xl lg:hidden"
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          onClick={toggleMenu}
          className="block px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 transition duration-300 border-b border-gray-800 last:border-b-0"
        >
          {item.name}
        </a>
      ))}
    </motion.div>
  );


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-md shadow-lg border-b border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-xl font-extrabold tracking-widest text-cyan-400 hover:text-cyan-300 transition duration-300">
              SUJAN R V
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition duration-150"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu navItems={navItems} toggleMenu={toggleMenu} />}
    </motion.nav>
  );
};

export default Navbar;