import React, {useContext} from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { PulseLoader } from 'react-spinners';
import './feedbacklist.css'

function FeedbackList() {
    const {feedback, loading} = useContext(FeedbackContext);

    if (loading) {
        return (
            <div className='fa-feedback-list-container'>
                <div className="fa-feedback-list-spinner">
                    <PulseLoader color={'white'}/>
                </div>
            </div>
        )

    } else {
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
}

export default FeedbackList;