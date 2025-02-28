export const FadeUp = (delay: number, y: number = 50) => {
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
