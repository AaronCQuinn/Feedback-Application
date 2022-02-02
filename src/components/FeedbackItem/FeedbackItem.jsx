import React, {useContext} from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import './feedbackitem.css';
import { MdClose } from 'react-icons/md'

function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext)
    return (
        <div className="fa-feedback-item-container">
            <div className='fa-feedback-item'>
                <div className="fa-feedback-item-topbar">
                    <div className='fa-feedback-item-rating'>
                        {item.rating}
                    </div>
                    <div className="fa-feedback-item-close">
                        <MdClose onClick={() => deleteFeedback(item.id)}/>
                    </div>
                </div>
                <div className="fa-feedback-item-text">
                    {item.text}
                </div>
            </div>
        </div>
    );
}

export default FeedbackItem;