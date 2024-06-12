// feedbackWorker.ts
import axios, { AxiosResponse } from 'axios';
import { FeedbackRequest, FeedbackResponse } from '../types/types';

onmessage = async function (e) {
  const { name, feedback } = e.data as FeedbackRequest;

  try {
    const response: AxiosResponse<FeedbackResponse> = await axios.post('http://localhost:8000/feedback', { name, feedback });

    if (response.status === 200) {
      postMessage({ status: 'success' });
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    postMessage({ status: 'error', error: error });
  }
};
