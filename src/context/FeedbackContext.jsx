import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    let feedbackList = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae voluptatem molestiae iste veniam, perspiciatis fuga labore tempora cumque eos.',
            rating: 9,
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae voluptatem molestiae iste veniam, perspiciatis fuga labore tempora cumque eos.',
            rating: 10,
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae voluptatem molestiae iste veniam, perspiciatis fuga labore tempora cumque eos.',
            rating: 4,
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae voluptatem molestiae iste veniam, perspiciatis fuga labore tempora cumque eos.',
            rating: 6,
        }
    ]

    const [feedback, setFeedback] = useState(feedbackList);

    const [editFeedback, seteditFeedback] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = async (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (item) => {
        seteditFeedback({item, edit: true})
    }

    const updateCurrentFeedback = async (id, newItem) => {
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