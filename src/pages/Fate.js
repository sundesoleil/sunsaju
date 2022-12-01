import React from 'react';
import { motion } from 'framer-motion';
import PersonalInfoInputForm from '../components/PersonalInfoInputForm';

function Fate() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PersonalInfoInputForm />
    </motion.div>
  );
}

export default Fate;
