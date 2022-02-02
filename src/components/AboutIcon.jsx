import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa'
import './aboutlink.css'

const AboutIcon = () => {
  return <div className='fa-about-link'>
    <Link to='/about'>
        <FaQuestion size={30} />
    </Link>
  </div>;
};

export default AboutIcon;
