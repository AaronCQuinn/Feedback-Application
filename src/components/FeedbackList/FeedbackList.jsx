import React, {useContext} from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    return (
        <AnimatePresence>
        {feedback.map((item) => {
            return (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem item={item} key={item.id} />
                </motion.div> 
            )
        })}
        </AnimatePresence>
    );
}

export default FeedbackList;