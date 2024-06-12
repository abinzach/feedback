import React, { SetStateAction, useState,Dispatch } from 'react';
import { useAppDispatch } from '../redux/reduxHooks';
import { addFeedback } from '../redux/feedbacksSlice';
import { Feedback } from '../types/types';

interface FeedbackFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ setOpen }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Instantiate the web worker
    const worker = new Worker(new URL('../workers/feedbackPostWorker.ts', import.meta.url));

    // Send the feedback data to the web worker
    worker.postMessage({ name, feedback });

    // Listen for messages from the web worker
    worker.onmessage = () => {
      // Dispatch the new feedback to the Redux store
      dispatch(addFeedback({ name, feedback } as Feedback));
      
      // Clear the input fields
      setName('');
      setFeedback('');
      setOpen(false);
      
      // Terminate the worker after processing the submission
      worker.terminate();
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-3xl font-semibold text-gray-600'>Feedback Form</h2>
      <div className='py-5 text-gray-800'>
        <label>Name</label>
        <input 
          className='w-full p-1 indent-1 border rounded-lg' 
          placeholder='Enter your name' 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className='py-5 text-gray-800'>
        <label>Feedback</label>
        <textarea 
          className='w-full p-1 indent-1 border rounded-lg' 
          placeholder='Enter your feedback' 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>
      <button 
        className='p-2 px-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 text-white' 
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
