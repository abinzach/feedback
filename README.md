# Feedback App

## Overview
The Feedback App is a full-stack application that allows users to submit feedback and view feedback from others. The application is built using React on the frontend, Redux for state management, and Express on the backend. Web Workers are used for handling asynchronous operations, such as fetching and posting feedback data.

## Project Structure

### Frontend

- **src/**
  - **components/**
    - `FeedbackForm.tsx`: Component for submitting feedback.
    - `FeedbackList.tsx`: Component for displaying the list of feedback.
    - `FeedbackCard.tsx`: Component for displaying individual feedback items.
  - **redux/**
    - `feedbacksSlice.ts`: Redux slice for managing feedback state.
    - `reduxHooks.ts`: Custom hooks for using Redux.
    - `store.ts`: Redux store setup.
  - **workers/**
    - `feedbackFetchWorker.ts`: Web Worker for fetching feedback.
    - `feedbackPostWorker.ts`: Web Worker for posting feedback.
  - **types/**
    - `types.ts`: TypeScript types used in the application.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point of the React application.

### Backend

- **src/**
  - `index.ts`: Entry point of the Express server.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- TypeScript installed globally.

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd feedback-backend
   
1. Install dependencies:
   ```sh
   npm install

1. Start the backend server:
   ```sh
   npx ts-node src/index.ts

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd feedback-frontend
   
1. Install dependencies:
   ```sh
   npm install

1. Start the React application:
   ```sh
   npm run start


### Usage
- **Submitting Feedback**
   - Open the application in your browser.
   - Fill out the feedback form with your name and feedback message.
   - Click "Submit" to send the feedback.
- **Viewing Feedback**
   - Scroll through the feedback list on the main page.
     Feedback entries are paginated, with 10 entries per page.


### Notes

- **Rate Limiting**
   - The backend /feedback POST endpoint is rate-limited to one request per 10 seconds per IP to prevent spam.
- **Web Workers**
   - Web Workers are used for fetching and posting feedback data to avoid blocking the main thread.
- **Error Handling**
   - Both the frontend and backend include basic error handling to manage network issues and invalid input.   
