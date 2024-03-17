import React, { useState } from 'react';
import catapiImage from './catapi.png';
import financialImage from './financial.png';
import electionsqlImage from './electionsql.png';

const projects = [
  {
    image: catapiImage,
    language: 'Javascript and API"s',
    link: 'https://annwanjiku.github.io/CatFactsAPI/'
  },
  {
    image: financialImage,
    language: 'Python',
    link: 'https://github.com/annwanjiku/financial_transactions_analysis'
  },
  {
    image: electionsqlImage,
    language: 'SQL',
    link: 'https://github.com/annwanjiku/election_analysis'
  }
];

function Boxe() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className='box5'>

      <h3><span>Projects</span></h3>
      <img src={projects[currentProject].image} alt={projects[currentProject].language}/>
      <div className='section1'>
        <button className='button' onClick={handlePrevProject}>Previous ←</button>
        <button className='button' onClick={handleNextProject}>Next →</button>
      </div>
     
     <div className='section2'>
        <p>Language: {projects[currentProject].language}    &nbsp; →  &nbsp;<a className='space' href={projects[currentProject].link} target="_blank" rel="noopener noreferrer"> Project Link</a></p>
    </div>

    </div>
  );
}

export default Boxe;
