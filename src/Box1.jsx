import React, { useState } from 'react';

function Boxa() {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div>
      <h1>Ann Wanjiku</h1>
      <h3 className='location'>📍Nairobi, Kenya</h3>

      <div className='display'>
      <button className="contactButton"
        onClick={toggleIcons}
      >
        Contact info
      </button>
      <div>
        {showIcons && (
          <>
            <a href="mailto:wanjikunganga21@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope icon" aria-hidden="true"></i>
            </a>
            <a href="tel:+254796952354" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone icon" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/ann-wanjiku-a6b197284/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon" aria-hidden="true"></i>
            </a>
          </>
        )}
      </div>
      </div>
      

    </div>
  );
}

export default Boxa;
