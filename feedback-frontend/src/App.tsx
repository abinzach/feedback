import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { AddFeedbackModal } from './components/AddFeedbackModal';

const App: React.FC = () => {
  const [isAddFeedbackModalOpen, setIsAddFeedbackModalOpen] = useState(false);

  useEffect(()=>{fetch('http://localhost:8000/') // replace with your endpoint
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

  },[])
  return (
    <div className='bg-gray-50 h-full min-h-screen'>
      <nav className='w-full text-blue-500 bg-white border text-5xl px-6 font-bold p-3'>feed.</nav>
      <div className='w-full flex justify-between p-5'>
        <h2 className='text-3xl font-semibold text-gray-600'>Feedbacks</h2>
        <button onClick={()=>setIsAddFeedbackModalOpen(!isAddFeedbackModalOpen)} className='p-2 px-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 text-white'>Add Feedback</button>
      </div>
      <AddFeedbackModal open={isAddFeedbackModalOpen} setOpen={setIsAddFeedbackModalOpen} />
      <FeedbackList />
    </div>
  );
};

export default App;
