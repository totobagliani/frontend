/* eslint-disable comma-dangle */
import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { SECTIONS, ADD_PRODUCT_INITIAL_STATE } from '../../services/constants';
import { useForm } from '../../hooks/useForm';
import CustomSelect from '../CustomSelect/CustomSelect';
import pathimg from '../../assets/empty.jpg';
import { useImgData } from '../../hooks/useImgData';
// import { useValidationForm } from '../../hooks/useValidator';

export default function AddProduct() {
  const sections = Object.values(SECTIONS);

  const [formAddProductValues, handleProductValueInputChange] = useForm(
    ADD_PRODUCT_INITIAL_STATE
  );
  const [favourite, setFavourite] = useState(false);

  const fileSelectorRef = useRef();

  const [imgFile, handleFileChange] = useImgData(false);

  const [formError, setFormError] = useState({
    productName: false,
    description: false,
    price: false,
    section: false,
  });
  // eslint-disable-next-line no-unused-vars
  const errorEntries = Object.entries(formError).filter(
    (item) => item[1] === true
  );

  // eslint-disable-next-line max-len
  /*   const [formError, handleformErrorChange] = useValidationForm({ ...ADD_PRODUCT_INITIAL_STATE }, [
    'isFavourite'
  ]);
 */

  const { productName, description, price, section } = formAddProductValues;

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const handleClickPicture = () => {
    fileSelectorRef.current.click();
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    // Validacion de los elementos.
    const formFields = Object.entries(formAddProductValues);
    formFields.forEach((field) => {
      if (!field[1]) {
        // eslint-disable-next-line no-param-reassign
        field[1] = true;
      } else {
        // eslint-disable-next-line no-param-reassign
        field[1] = false;
      }
    });
    const objFields = Object.fromEntries(formFields);

    setFormError(objFields);
    console.error(formError);
  };

  return (
    <div className={styles.addProduct__container}>
      <h2 className={styles.addproduct_header}>Añadir Producto</h2>
      <form
        id="addProduct-form"
        className={styles.addProduct}
        onSubmit={handleAddProductSubmit}
      >
        <fieldset className={styles.addproduct_group}>
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            placeholder="Añade un nombre"
            maxLength={20}
            name="productName"
            value={productName}
            onChange={handleProductValueInputChange}
          />
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
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
            name="section"
            value={section}
            handleChange={handleProductValueInputChange}
          />
        </fieldset>
        <fieldset className={styles.addproduct_group}>
          <div className="imgForm__container">
            {!imgFile ? (
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
            form="addProduct-form"
            id="file-selector-toimage"
            ref={fileSelectorRef}
            className={styles['file-selector-toimage']}
            type="file"
            name="imageURL"
            placeholder="sube una imagen"
            onChange={handleFileChange}
          />
          <button
            form="addProduct-form"
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
            step=".01"
            name="price"
            className={`${styles.addproduct__text} inputtext`}
            placeholder="Indica el precio "
            value={price}
            onChange={handleProductValueInputChange}
          />

          <label htmlFor="isFAvourite" className="formLabel">
            Favorito:
            <input
              type="checkbox"
              name="favourite"
              className="checkboxForm"
              value={favourite}
              onChange={handleFavourite}
            />
          </label>
        </fieldset>
        <div className={styles.addproduct__buttons}>
          <button className="btn btn--cancel" type="button">
            Cancelar
          </button>
          <button
            form="addProduct-form"
            className="btn btn--accept"
            type="submit"
          >
            Publicar
          </button>
        </div>
      </form>
      {errorEntries.length !== 0 && (
        <div className="errors">
          <p className="errors__title">
            Error de validacion para los siguientes campos:{' '}
          </p>
          {imgFile === false && (
            <p className="errors__item">
              Solo se puede añadir un producto con una imagen
            </p>
          )}
          <ul className="errors__list">
            {errorEntries.map((errorEntry) => (
              <li key={errorEntry} className="errors__item">
                {errorEntry[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
