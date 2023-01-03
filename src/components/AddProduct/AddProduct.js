/* eslint-disable comma-dangle */
import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { SECTIONS, ADD_PRODUCT_INITIAL_STATE } from '../../services/constants';
import { useForm } from '../../hooks/useForm';
import CustomSelect from '../CustomSelect/CustomSelect';
import pathimg from '../../assets/empty.jpg';
import { useImgData } from '../../hooks/useImgData';

export default function AddProduct() {
  const sections = Object.values(SECTIONS);

  const [formAddProductValues, handleProductValueInputChange] = useForm(
    ADD_PRODUCT_INITIAL_STATE
  );
  const [favov, setFavor] = useState(false);

  const fileSelectorRef = useRef();

  const [imgFile, handleFileChange] = useImgData(null);

  const handleFavourite = () => {
    setFavor(!favov);
  };

  const handleClickPicture = () => {
    fileSelectorRef.current.click();
  };

  const { productName, description, price, section } = formAddProductValues;

  return (
    <div className={styles.addProduct__container}>
      <h2 className={styles.addproduct_header}>Añadir Producto</h2>
      <form id="addProduct" className={styles.addProduct}>
        <fieldset className={styles.addproduct_group}>
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            required
            placeholder="Añade un nombre"
            maxLength={20}
            name="productName"
            value={productName}
            onChange={handleProductValueInputChange}
          />
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            required
            placeholder="Escriba una pequeña descripción"
            maxLength={60}
            name="description"
            value={description}
            onChange={handleProductValueInputChange}
          />

          <CustomSelect
            selectProps={{
              selectName: 'section',
              selectTitle: 'Sección',
              classSelect: styles.addproduct__select,
              classTitle: styles.addproduct__optiontitle,
              optionValues: sections,
            }}
            value={section}
            onChange={handleProductValueInputChange}
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
            id="file-selector-toimage"
            ref={fileSelectorRef}
            className={styles['file-selector-toimage']}
            type="file"
            name="imageURL"
            placeholder="sube una imagen"
            onChange={handleFileChange}
          />
          <button
            form="addpost-form"
            className="btn btn--accept"
            type="button"
            onClick={handleClickPicture}
          >
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
            value={price}
            onChange={handleProductValueInputChange}
          />

          <label htmlFor="isFAvourite" className="formLabel">
            Favorito:
            <input
              type="checkbox"
              name="isFAvourite"
              className="checkboxForm"
              value={favov}
              onClick={handleFavourite}
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
