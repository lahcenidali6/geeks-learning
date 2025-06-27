import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCharCount(length);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
