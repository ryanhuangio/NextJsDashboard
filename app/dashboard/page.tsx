'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookBible, faFile, faFolderTree, faGauge, faMoon, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});


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
    <div className={`${darkMode ? 'dark' : '' } flex ${poppins.className}`}>
      <nav
        onClick={toggleNavbar}
        className={`
        ${navbarExpanded ? ' w-48' : 'w-16'}
        fixed top-0 left-0 h-screen flex flex-col justify-between bg-slate-300 dark:bg-slate-800 shadow-lg text-slate-900 dark:text-white p-3
        `}
      >
        <div className='flex flex-col flex-item'>
        <a href='' className='align-middle mb-4 flex flex-item items-center'>
          <div className='w-11 self-center text-center center'>
             <FontAwesomeIcon icon={faGauge} size='2x' className='ml-0.5 mr-3' />
          </div>
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Dashboard</span>
          </a>
          <a href='' className='align-middle mb-4 flex flex-item items-center'>
          <div className='w-11'>
              <FontAwesomeIcon icon={faBook} size='2x' className='ml-1 mr-3' />
          </div>
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Collections</span>
          </a>
          <a href='' className='align-middle mb-4 flex flex-item items-center'>
          <div className='w-11 self-center'>
              <FontAwesomeIcon icon={faFile} size='2x' className='ml-1.5 mr-3' />
          </div>
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Documents</span>
          </a>
          <a href='' className='align-middle mb-4 flex flex-item items-center'>
          <div className='w-11'>
              <FontAwesomeIcon icon={faUser} size='2x' className='ml-1 mr-3' />
          </div>
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Customers</span>
          </a>
        </div>
        <a href='' className='align-middle mb-4 flex items-center flex-item flex-start'>
        <div className='w-11'>
          <FontAwesomeIcon icon={faRightFromBracket}  size='2x' className=' mr-3' />
          </div>
          <span className={`${navbarExpanded ? 'inline' : 'hidden'}`}>Logout</span>
          </a>
      </nav>
      <div className={`bg-slate-200 dark:bg-slate-500 text-black dark:text-white w-screen h-screen flex-col transition-all pl-8 pr-8 pt-4 pb-4
        ${navbarExpanded ? 'ml-48' : 'ml-16'}
      `}>
        <nav>
          <a onClick={toggleDarkMode} className='rounded-full border-slate-700 inline-block p-2'>
          <FontAwesomeIcon icon={faMoon}  size='1x' />
          </a>
        </nav>
        <main>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p>...</p>
        </main>
      </div>
    </div>
  );
}

