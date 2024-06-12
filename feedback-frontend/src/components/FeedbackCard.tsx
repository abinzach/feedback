import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface FeedbackCardProps {
  name: string;
  feedback: string;
}

const FeedbackCard = ({ name, feedback }: FeedbackCardProps) => {
  return (
    <AnimatePresence>
      <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:.5}} className="max-w-6xl w-full bg-white min-w-96 p-10 rounded-lg  border">
        <h3 className="font-semibold text-xl py-3">{name}</h3>
        <p className="">{feedback} </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeedbackCard;
