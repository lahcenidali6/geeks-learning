import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../features/planner/plannerSlice';

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  return (
    <input
      type="date"
      className="form-control mb-3"
      value={selectedDate}
      onChange={e => dispatch(setDate(e.target.value))}
    />
  );
};

export default DatePicker;
