import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import './feedbackstats.css'

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext);

    let feedbackAvg = 0;
    feedback.forEach(item => {
        feedbackAvg += item.rating;
    })
    feedbackAvg /= feedback.length;

    return (  
        <div className="fa-feedback-stats-container">
            <div className='fa-feedback-stats'>
                <div>
                    Total Reviews: {feedback.length}
                </div>
                <div>
                    Feedback Average: {isNaN(feedbackAvg) ? 0 : feedbackAvg.toFixed(1).replace(/[.,]0$/, '')}
                </div>
            </div>
        </div>
    );
};

export default FeedbackStats;
