import { useState, useEffect } from 'react';

/**
 * Hook to trigger re-animation when a specific section is navigated to via Navbar.
 * Returns a key that increments every time the section is incorrectly targeted.
 * @param {string} sectionId - The ID of the section (e.g., 'about', 'projects')
 * @returns {number} - A key to force React to remount/reset the animation component
 */
const useNavTrigger = (sectionId) => {
    const [triggerKey, setTriggerKey] = useState(0);

    useEffect(() => {
        const handleNavClick = (event) => {
            // Check if the clicked link matches this section
            // event.detail should contain the target ID (e.g., '#about')
            if (event.detail === `#${sectionId}`) {
                setTriggerKey(prev => prev + 1);
            }
        };

        window.addEventListener('nav-click', handleNavClick);
        return () => window.removeEventListener('nav-click', handleNavClick);
    }, [sectionId]);

    return triggerKey;
};

export default useNavTrigger;
