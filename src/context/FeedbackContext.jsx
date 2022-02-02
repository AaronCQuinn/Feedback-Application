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

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback}}>{children}</FeedbackContext.Provider> 
}

export default FeedbackContext