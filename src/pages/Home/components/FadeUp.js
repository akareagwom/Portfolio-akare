// components/FadeUp.js
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </Box>
  );
};

export default FadeUp;
