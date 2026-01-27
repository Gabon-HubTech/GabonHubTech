"use client"

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function CodeDecoration({
  text,
  top,
  left,
  right,
  bottom,
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      className={`absolute font-mono text-sm text-tech-blue/40 pointer-events-none select-none z-10 hidden md:block ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      <span className="text-tech-blue/20 mr-2">01</span>
      {text}
    </motion.div>
  );
}

CodeDecoration.propTypes = {
  text: PropTypes.string.isRequired,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
};

CodeDecoration.defaultProps = {
  delay: 0,
  className: '',
};