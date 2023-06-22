'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Dashboard() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : '' }`}>
    <div className='flex'>
      <div
        onClick={toggleNavbar}
        className={`fixed top-0 left-0 h-screen 
        ${navbarExpanded ? 'w-64' : 'w-16'}
         flex flex-col bg-slate-300 dark:bg-slate-800 shadow-lg text-slate-900 dark:text-white `}
      >
        <a>
          <FontAwesomeIcon icon={faGauge} />
          <span className={`${navbarExpanded ? 'visible' : 'invisible'}`}>Dashboard</span>
          </a>
        <a>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className={`${navbarExpanded ? 'visible' : 'invisible'}`}>Logout</span>
          </a>
        
      </div>
      <div className={`bg-slate-200 dark:bg-slate-500 text-black dark:text-white block w-screen h-screen flex-col transition-all
        ${navbarExpanded ? 'ml-64' : 'ml-16'}
      `}>
        <a onClick={toggleDarkMode} className='rounded-full border-slate-700 inline-block p-2'>
        <FontAwesomeIcon icon={faMoon} />
        </a>
        <h1>Dashboard</h1>
        <p>dashboard contents...</p>
      </div>
    </div>
    </div>
  );
}

