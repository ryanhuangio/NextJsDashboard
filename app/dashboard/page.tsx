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
         flex flex-col bg-slate-300 dark:bg-slate-800 shadow-lg text-slate-900 dark:text-white p-3 `}
      >
        <a className='align-middle mb-4 flex items-center'>
          <FontAwesomeIcon icon={faGauge} size='2x' className=' mr-3' />
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Dashboard</span>
          </a>
        <a className='align-middle mb-4 flex items-center'>
          <FontAwesomeIcon icon={faRightFromBracket}  size='2x' className=' mr-3' />
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Logout</span>
          </a>
        
      </div>
      <div className={`bg-slate-200 dark:bg-slate-500 text-black dark:text-white block w-screen h-screen flex-col transition-all pl-8 pr-8 pt-4 pb-4
        ${navbarExpanded ? 'ml-64' : 'ml-16'}
      `}>
        <a onClick={toggleDarkMode} className='rounded-full border-slate-700 inline-block p-2'>
        <FontAwesomeIcon icon={faMoon}  size='1x' />
        </a>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p>dashboard contents...</p>
      </div>
    </div>
    </div>
  );
}

