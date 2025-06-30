import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './inventorySlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    if (!name || quantity <= 0) return;
    dispatch(addProduct({ id: Date.now(), name, quantity: Number(quantity) }));
    setName('');
    setQuantity('');
  };

  return (
    <div className="card p-3 mb-3">
      <h5>Add Product</h5>
      <div className="d-flex gap-2">
        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
