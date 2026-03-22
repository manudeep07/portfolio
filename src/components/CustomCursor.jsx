import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        
        // Hide default cursor on devices that aren't touch
        if (window.matchMedia("(pointer: fine)").matches) {
            document.body.style.cursor = 'none';
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly move the dot
            gsap.to(dot, {
                x: mouseX,
                y: mouseY,
                duration: 0,
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        // GSAP ticker for smooth trailing 60fps cursor ring
        const renderCursor = () => {
            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.15,
                ease: "power2.out",
                overwrite: "auto"
            });
        };
        
        gsap.ticker.add(renderCursor);

        // Add hover effects for interactive elements
        const handleHover = () => {
            gsap.to(cursor, { scale: 1.5, borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
            gsap.to(dot, { scale: 0, duration: 0.3 });
        };
        
        const handleLeave = () => {
            gsap.to(cursor, { scale: 1, borderColor: 'rgba(255,255,255,0.8)', backgroundColor: 'transparent', duration: 0.3 });
            gsap.to(dot, { scale: 1, duration: 0.3 });
        };

        const setupHoverEvents = () => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-pointer');
            interactiveElements.forEach(el => {
                el.style.cursor = 'none';
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleLeave);
            });
            return interactiveElements;
        };

        // Delay setup slightly to let React render components
        let interactives = [];
        setTimeout(() => { interactives = setupHoverEvents(); }, 500);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            gsap.ticker.remove(renderCursor);
            document.body.style.cursor = 'auto';
            interactives.forEach(el => {
                el.style.cursor = 'auto';
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            {/* The outer smooth trailing ring */}
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/80 pointer-events-none z-[10000] hidden md:block mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            ></div>
            
            {/* The inner fast dot */}
            <div 
                ref={dotRef} 
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10001] hidden md:block mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            ></div>
        </>
    );
};

export default CustomCursor;
