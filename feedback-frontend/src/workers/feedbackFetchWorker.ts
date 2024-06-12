// feedbackWorker.ts
import { FeedbackData } from '../types/types';

onmessage = async () => {
  try {
    const response = await fetch('http://localhost:8000/feedback');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data: FeedbackData[] = await response.json();
    postMessage(data);
  } catch (error) {
    postMessage({ error });
  }
};
