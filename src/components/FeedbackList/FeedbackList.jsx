import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList({feedback, handleDelete}) {
    return (
        <AnimatePresence>
        {feedback.map((item) => {
            return (<motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <FeedbackItem item={item} key={item.id} handleDelete={handleDelete}/>
            </motion.div> )
        })}
        </AnimatePresence>
    );
}

export default FeedbackList;