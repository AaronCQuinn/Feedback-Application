import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
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
    const [feedback, setFeedback] = useState(feedbackItems);
    const [editFeedback, seteditFeedback] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (item) => {
        seteditFeedback({item, edit: true})
    }

    const updateCurrentFeedback = (id, newItem) => {
        // Map over each item, if the ID is equal, spread the current item and the updated item. If not, leave the item as is.
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...newItem } : item))
    }

    return <FeedbackContext.Provider 
        value={
            {feedback,
            editFeedback,
            seteditFeedback,
            deleteFeedback, 
            addFeedback, 
            updateFeedback,
            updateCurrentFeedback
        }
        }>{children}</FeedbackContext.Provider> 
}

export default FeedbackContext