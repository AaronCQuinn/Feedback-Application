import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';

// Context providers.

import {FeedbackProvider} from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
      <Router> 
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }></Route>
              <Route exact path='/about' element={<About />} />
            </Routes>
            <AboutIcon />
          </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
