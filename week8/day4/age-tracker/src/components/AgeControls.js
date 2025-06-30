import React from 'react';
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice';
import Button from 'react-bootstrap/Button';

const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-3">
      <Button variant="success" className="me-2" onClick={() => dispatch(ageUpAsync())}>
        Age Up
      </Button>
      <Button variant="danger" onClick={() => dispatch(ageDownAsync())}>
        Age Down
      </Button>
    </div>
  );
};

export default AgeControls;
