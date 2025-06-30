import AddProduct from './features/inventory/AddProduct';
import InventoryList from './features/inventory/InventoryList';

function App() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Store Inventory Manager</h2>
      <AddProduct />
      <InventoryList />
    </div>
  );
}

export default App;
