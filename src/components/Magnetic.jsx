import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Magnetic Button wrapper.
 * Mimics Vercel/Linear cursor awareness. The element shifts slightly towards the user's cursor.
 */
const Magnetic = ({ children, padding = 40, strength = 0.3 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate center of element
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Calculate displacement based on strength variable
        setPosition({ 
            x: middleX * strength, 
            y: middleY * strength 
        });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 15, 
                mass: 0.1 
            }}
            className="inline-block relative z-10"
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
