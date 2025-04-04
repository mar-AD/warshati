export const FadeUp = (delay: number, y: number = 50, keepTransform = false) => {
  return {
    initial: {
      opacity: 0,
      y: y,
    },
    animate: {
      opacity: 1,
      y: keepTransform ? y : 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
export const FadeDown = (delay: number, y: number = -50) => {
  return {
    initial: {
      opacity: 0,
      y: y,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
export const FadeLeft = (delay: number, x: number = 50) => {
  return {
    initial: {
      opacity: 0,
      x: x,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
export const FadeRight = (delay: number, x: number = -50) => {
  return {
    initial: {
      opacity: 0,
      x: x,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
export const FadeOut = (delay: number) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 4,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
export const FadeTyping = (delay: number) => {
  return {
    initial: { opacity: 0, y: 5, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration:1,
        delay,
      },
    },
  };
};


export const dropdown = (delay: number) => {
  return {
    initial: { opacity: 0, y: -10, scaleY: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scaleY: 1, 
      transition: { 
        duration: 0.3, 
        ease: "easeInOut", 
        delay 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scaleY: 0.8, 
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    },
  };
};


