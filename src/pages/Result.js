import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Result() {
  const location = useLocation();
  const info = location.state.info;
  console.log('### info =>', info);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>{info.name}</h1>
      <h1>{info.sex}</h1>
    </motion.div>
  );
}

export default Result;
