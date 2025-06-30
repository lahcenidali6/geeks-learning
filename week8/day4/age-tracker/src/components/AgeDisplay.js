import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div className="text-center mt-4">
      {loading ? <Spinner animation="border" /> : <h2>Age: {age}</h2>}
    </div>
  );
};

export default AgeDisplay;
