import React, { useState } from 'react'
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App() {

  let feedbackItems = [
    {
        id: 0,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet est ab voluptatum cumque impedit suscipit dignissimos ipsam reiciendis et',
    },
    {
        id: 1,
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet est ab voluptatum cumque impedit suscipit dignissimos ipsam reiciendis et',
    },
    {
        id: 2,
        rating: 7,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet est ab voluptatum cumque impedit suscipit dignissimos ipsam reiciendis et',
    },
  ]
  // Eventually this will do an API call, while that API calls, should display a loading sign.
  const [feedback, setFeedback] = useState(feedbackItems);

  const handleDelete = (id) => {
    setFeedback(feedback.filter(item => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
