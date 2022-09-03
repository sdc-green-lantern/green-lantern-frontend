import React, { useState } from 'react';

function SearchQA(props) {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div>
        Search Questions:
        <input type="Search" onChange={(e) => setTerm(e.target.value)} />
      </div>

    </div>
  );
}

export default SearchQA;
