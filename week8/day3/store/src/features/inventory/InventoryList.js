import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from './inventorySlice';
import UpdateQuantity from './UpdateQuantity';

const InventoryList = () => {
  const products = useSelector(state => state.inventory.products);
  const dispatch = useDispatch();

  return (
    <div className="card p-3">
      <h5>Inventory List</h5>
      {products.length === 0 && <p>No products available.</p>}
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{product.name}</strong> — {product.quantity} units
            </div>
            <div className="d-flex gap-2">
              <UpdateQuantity product={product} />
              <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
