import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchFeedback()
    },[])

    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json();
        setFeedback(data);
        setLoading(false);
    }

    const [editFeedback, seteditFeedback] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = async (id) => {
        await fetch(`/feedback/${id}`, { method: 'DELETE'})
        setFeedback(feedback.filter(item => item.id !== id))
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();
        setFeedback([data, ...feedback])
    }

    const updateFeedback = (item) => {
        seteditFeedback({item, edit: true})
    }

    const updateCurrentFeedback = async (id, newItem) => {
        // Map over each item, if the ID is equal, spread the current item and the updated item. If not, leave the item as is.
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })

        const data = await response.json();
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    return <FeedbackContext.Provider 
        value={
            {feedback,
            editFeedback,
            loading,
            seteditFeedback,
            deleteFeedback, 
            addFeedback, 
            updateFeedback,
            updateCurrentFeedback
        }
        }>{children}</FeedbackContext.Provider> 
}

export default FeedbackContext