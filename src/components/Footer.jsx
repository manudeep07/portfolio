import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-10 border-t border-gray-900 text-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-8">
                    <motion.a whileHover={{ scale: 1.2, backgroundColor: "#374151", color: "#fff" }} href="https://github.com/manudeep07/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full text-gray-400 transition-all cursor-pointer">
                        <Github size={20} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, backgroundColor: "#0077b5", color: "#fff" }} href="https://www.linkedin.com/in/manudeep07/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full text-gray-400 transition-all cursor-pointer">
                        <Linkedin size={20} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, backgroundColor: "#c71610", color: "#fff" }} href="mailto:manudeep1000@gmail.com" className="p-3 bg-gray-900 rounded-full text-gray-400 transition-all cursor-pointer">
                        <Mail size={20} />
                    </motion.a>
                </div>

                <p className="text-gray-600 text-sm">
                    © {currentYear} Narasingu Manudeep. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
