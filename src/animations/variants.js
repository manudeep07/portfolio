// Premium Linear/Vercel standard easing
export const premiumEasing = [0.22, 1, 0.36, 1]; // "easeOutExpo" or Apple-style spring-like bezier

export const blurFadeIn = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: premiumEasing }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: premiumEasing }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: premiumEasing }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const navVariants = {
    hidden: { y: -20, opacity: 0, filter: "blur(5px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: premiumEasing }
    }
};

export const photoAnim = {
    hidden: { scale: 0.95, opacity: 0, filter: "blur(20px)" },
    visible: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 1, ease: premiumEasing }
    }
};
