// types.ts
export interface FeedbackRequest {
  name: string;
  feedback: string;
}

export interface FeedbackResponse {
  status: 'success' | 'error';
  error?: string;
}

export interface FeedbackData {
    name: string;
    feedback: string;
  }

  export interface Feedback{
    id:number;
    name: string;
    feedback: string;
  }