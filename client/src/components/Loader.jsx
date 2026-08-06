import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FFF8F0] z-50">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-20 h-20 border-4 border-yellow-400 border-t-[#8B1E1E] rounded-full"
      />

    </div>
  );
}

export default Loader;