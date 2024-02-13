import './HotBar.css';
import React, { useState } from 'react';


export default function HotBar({setOption}) {

  const [selectedOption, setSelection] = useState('search')

  const giveSelection = (e) => {
    setSelection(e.target.id)
    setOption(e.target.id)
  }

  return (
    <div className='hot-bar-container'>
      <div className={`option ${selectedOption === 'search' ? 'selected' : ''}`} id='search' onClick={giveSelection}>Search</div>
      <div className={`option ${selectedOption === 'browse' ? 'selected' : ''}`} id='browse' onClick={giveSelection}>Browse Content</div>
      <div className={`option ${selectedOption === 'create' ? 'selected' : ''}`} id='create' onClick={giveSelection}>Create Content</div>
      <div className={`option ${selectedOption === 'user' ? 'selected' : ''}`} id='user' onClick={giveSelection}>User Nav</div>
    </div>
  )
}



