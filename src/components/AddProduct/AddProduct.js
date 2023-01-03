import React from 'react';
import styles from './styles.module.scss';

export default function AddProduct() {
  return (
    <div className="addProduct__container">
      <h2 className={styles.addproduct_header}>Add Product</h2>
      <form className="addProduct">
        <input type="text" required placeholder="Add a product Name" />
        <input type="text" required placeholder="Short Description" />
      </form>
    </div>
  );
}
