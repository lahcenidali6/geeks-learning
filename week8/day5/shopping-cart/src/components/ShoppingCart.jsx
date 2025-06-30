import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import {
  selectProducts,
  selectCartItems,
  calculateTotalPrice,
} from '../features/cart/selectors';
import { FaShoppingCart } from 'react-icons/fa';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(calculateTotalPrice);

  const handleAddToCart = useCallback(
    (id) => {
      dispatch(addToCart(id));
    },
    [dispatch]
  );

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-2">
          <FaShoppingCart className="text-blue-600 text-5xl" />
          <span>Shopping Cart</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Products</h2>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b py-3"
              >
                <span className="text-lg text-gray-600">{product.name} - ${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-blue-600 hover:bg-blue-700  font-medium px-4 py-2 rounded-lg transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
              <ul className="space-y-3">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-lg text-gray-600 border-b pb-2"
                  >
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 pt-4 font-bold text-xl text-right text-gray-800">
              Total: ${total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
