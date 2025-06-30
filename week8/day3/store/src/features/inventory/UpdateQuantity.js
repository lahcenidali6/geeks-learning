import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from './inventorySlice';

const UpdateQuantity = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(product.quantity);

  const handleUpdate = () => {
    dispatch(updateQuantity({ id: product.id, quantity: Number(qty) }));
  };

  return (
    <>
      <input
        type="number"
        className="form-control form-control-sm"
        style={{ width: '80px' }}
        value={qty}
        onChange={e => setQty(e.target.value)}
      />
      <button className="btn btn-sm btn-success" onClick={handleUpdate}>Update</button>
    </>
  );
};

export default UpdateQuantity;
