// add-product.tsx
import React from 'react';
import Header from '../components/Header'

const AddProduct: React.FC = () => {
  return (
    <div>
      <Header isAddProductPage />
      <h1>Add Product</h1>
      {/* Add your form or other components for adding a product here */}
    </div>
  );
};

export default AddProduct;

