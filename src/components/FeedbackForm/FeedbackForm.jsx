import React, {useState, useContext, useEffect} from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import {v4 as uuid} from 'uuid'
import RatingSelect from '../RatingSelect/RatingSelect';
import './feedbackform.css'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [wrnMessage, setwrnMessage] = useState(false);

    const {addFeedback, editFeedback, updateCurrentFeedback, seteditFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if (editFeedback.edit) {
            setBtnDisabled(false);
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating);
        }
    }, [editFeedback])

    const handleInputChange = (e) => {
        // If there is no text, disable submit button and hide warning.
        if (text === '') {
            setBtnDisabled(true);
            setwrnMessage(false);
        // If there is text, and the char count is <= 10, show message and disable button.
        } else if (text !== '' && text.trim().length <= 10) {
            setwrnMessage(true)
            setBtnDisabled(true);
        } else {
        // The text > 10 characters, let user submit.
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
            if (editFeedback.edit) {
                updateCurrentFeedback(editFeedback.item.id, newFeedback);
                seteditFeedback({item: {}, edit: false})
            } else {
                addFeedback(newFeedback);
            }
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