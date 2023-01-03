import React from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export default function ProductCard({ product }) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCard__imgcontainer}>
        <img
          src={product.imageURL}
          alt={product.productName}
          className={styles.ProductCard__image}
        />
        {product.isFavourite ? (
          <HeartFilled className={styles.productCard__icon} />
        ) : (
          <HeartOutlined className={styles.productCard__icon} />
        )}
      </div>

      <p className={styles.productCard__name}>{product.productName}</p>

      <p className={styles.productCard__price}>{product.price} €</p>
    </article>
  );
}
