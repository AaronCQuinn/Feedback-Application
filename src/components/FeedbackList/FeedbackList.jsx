import React from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList({feedback, handleDelete}) {
    return (
        feedback.map((item) => {
            return <FeedbackItem item={item} key={item.id} handleDelete={handleDelete}/>
        })
    );
}

export default FeedbackList;