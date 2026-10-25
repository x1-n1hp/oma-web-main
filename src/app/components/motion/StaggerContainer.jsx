"use client";

import { motion } from "framer-motion";

export const StaggerContainer = ({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.1,
  amount = 0.15,
  once = true,
  className = "",
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  duration = 0.5,
  distance = 24,
  direction = "up",
  className = "",
  ...props
}) => {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};
