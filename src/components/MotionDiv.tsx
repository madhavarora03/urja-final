import { motion } from 'framer-motion';

type MotionDivProps = {
  style: 'appear' | 'slide-up';
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  id,
  className,
  style,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ y: `${style === 'appear' ? '0' : '7.5rem'}`, opacity: 0 }}
      whileInView={{ y: '0', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
