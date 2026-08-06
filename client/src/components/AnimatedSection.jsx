import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../utils/animations";

function AnimatedSection({ children, variants = fadeUp }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;