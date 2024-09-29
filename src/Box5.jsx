import React from 'react';

const projects = [
  {
    language: 'Javascript and API"s',
    link: 'https://annwanjiku.github.io/CatFactsAPI/'
  },
  {
    language: 'Python',
    link: 'https://github.com/annwanjiku/IrisDatasetML'
  },
  {
    language: 'SQL',
    link: 'https://github.com/annwanjiku/election_analysis'
  }
];

function Boxe() {
  return (
    <div className='box5'>

      <h3><span>Projects</span></h3>
      
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.language}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Boxe;