import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { setFeedbacks } from '../redux/feedbacksSlice';
import { Feedback } from '../types/types';
import FeedbackCard from './FeedbackCard';
import { motion } from "framer-motion";

const FeedbackList: React.FC = () => {
  const dispatch = useAppDispatch();
  const feedbacks = useAppSelector((state) => state.feedbacks.feedbacks);

  useEffect(() => {
    const worker = new Worker(new URL('../workers/feedbackFetchWorker.ts', import.meta.url));
    worker.onmessage = (event) => {
      dispatch(setFeedbacks(event.data as Feedback[]));
    };
    worker.postMessage({});

    return () => {
      worker.terminate();
    };
  }, [dispatch]);

  return (
    <motion.div layout className='w-full max-w-6xl mx-auto gap-3 grid lg:grid-cols-3 place-content-center'>
        {feedbacks.map((fb, index) => (
            <FeedbackCard name={fb.name} feedback={fb.feedback}/>
        ))}
    </motion.div>
  );
};

export default FeedbackList;
