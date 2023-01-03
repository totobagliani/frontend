import React from 'react';
import styles from './styles.module.scss';
import { SECTIONS } from '../../services/constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import pathimg from '../../assets/empty.jpg';

export default function AddProduct() {
  const sections = Object.values(SECTIONS);
  const imgFile = null;

  return (
    <div className={styles.addProduct__container}>
      {' '}
      <h2 className={styles.addproduct_header}>Añadir Producto</h2>
      <form id="addProduct" className={styles.addProduct}>
        <fieldset className={styles.addproduct_group}>
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            required
            placeholder="Añade un nombre"
            maxLength={20}
          />
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            required
            placeholder="Escriba una pequeña descripción"
            maxLength={60}
          />
          <CustomSelect
            selectProps={{
              selectName: 'section',
              selectTitle: 'Sección',
              classSelect: styles.addproduct__select,
              classTitle: styles.addproduct__optiontitle,
              optionValues: sections,
            }}
          />
        </fieldset>
        <fieldset className={styles.addproduct_group}>
          <div className="imgForm__container">
            {imgFile === null ? (
              <img
                className={styles.imgform__image}
                src={pathimg}
                alt="imagen sin cargar"
                accept="image/png, .jpeg, .jpg, image/gif"
              />
            ) : (
              <img
                className={styles.imgform__image}
                alt="imagen a subir"
                src={imgFile}
              />
            )}
          </div>
          <input
            form="addProduct"
            id={styles['file-selector-toimage']}
            type="file"
            name="imageURL"
            placeholder="sube una imagen"
          />
          <button form="addpost-form" className="btn btn--accept" type="button">
            Elegir Imagen
          </button>
        </fieldset>
        <fieldset className={styles.addproduct_group}>
          <input
            type="number"
            name="price"
            className={`${styles.addproduct__text} inputtext`}
            required
            placeholder="Indica el precio "
          />
          <label htmlFor="isFAvourite" className="formLabel">
            Favorito:
            <input
              type="checkbox"
              name="isFAvourite"
              className="checkboxForm"
            />
          </label>
        </fieldset>
        <div className={styles.addproduct__buttons}>
          <button className="btn btn--cancel" type="button">
            Cancelar
          </button>
          <button form="addpost-form" className="btn btn--accept" type="submit">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}
