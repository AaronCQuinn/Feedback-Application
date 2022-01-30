import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import RatingSelect from '../RatingSelect/RatingSelect';
import './feedbackform.css'

const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [wrnMessage, setwrnMessage] = useState(false);

    const handleInputChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setwrnMessage(false);
        } else if (text !== '' && text.trim().length <= 10) {
            setwrnMessage(true)
            setBtnDisabled(true);
        } else {
            setwrnMessage(false);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating,
                id: uuid()
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="fa-feedback-form-container">
                <div className="fa-feedback-form">
                    <h3>How would you rate your service with us?</h3>
                    <RatingSelect select={(rating) => setRating(rating)}/>
                    <div className="input-group">
                        <input type="text" placeholder="Write a review..." value={text} onChange={handleInputChange}/>
                        <button type="submit" className='btn' disabled={btnDisabled}>Submit</button>
                    </div>
                    {wrnMessage && <div className='fa-feedback-wrn-mesage'>Your comment must be atleast 10 characters to submit.</div>}
                </div>
            </div>
        </form>
    );
};

export default FeedbackForm;