import React from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'
import './about.css'

function About() {
    return (
    <div className='fa-about-container'>
        <AnimatePresence>
            <motion.div key={0} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <div className='fa-about'> 
                    <h2> About </h2>
                    <div> Version 1.1.0 </div>    
                    <div> A react application designed to collect feedback from users for a product or service. </div>    
                    <div> Primarily created by Aaron Quinn to practice react development along with CSS. </div>    
                    <Link to='/'>Return To Homepage</Link>
                </div>
            </motion.div>
        </AnimatePresence>
    </div>
    );
}

export default About;
