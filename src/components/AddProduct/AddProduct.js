/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { SECTIONS, ADD_PRODUCT_INITIAL_STATE } from '../../services/constants';
import { useForm } from '../../hooks/useForm';
import pathimg from '../../assets/empty.jpg';
import { useImgData } from '../../hooks/useImgData';
import { startAddProduct } from '../../redux/actions/products.action';
import CustomSelect from '../CustomSelect/CustomSelect';

export default function AddProduct() {
  const sections = Object.values(SECTIONS);

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const [formAddProductValues, handleProductValueInputChange, reset] = useForm(
    ADD_PRODUCT_INITIAL_STATE
  );
  const [favourite, setFavourite] = useState(false);

  const { productName, description, price, section } = formAddProductValues;

  const fileSelectorRef = useRef();

  const [imgFile, handleFileChange, resetImgFile] = useImgData(false);

  const [formError, setFormError] = useState({
    productName: false,
    description: false,
    price: false,
    section: false,
    imgFile: false
  });
  // eslint-disable-next-line no-unused-vars
  const errorEntries = Object.entries(formError).filter(
    (item) => item[1] === true
  );

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const handleClickPicture = () => {
    fileSelectorRef.current.click();
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    // Validacion de los elementos.
    const formFields = Object.entries({ ...formAddProductValues, imgFile });
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

    if (errorEntries.length === 0) {
      if (imgFile !== false) {
        const product = {
          productName,
          description,
          isFavourite: favourite,
          price,
          section
        };

        dispatch(startAddProduct(imgFile, product));
        reset();
        resetImgFile();
      }
    }
  };

  return (
    <div className={styles.addProduct__container}>
      <h2 className={styles.addproduct_header}>A??adir Producto</h2>
      <form
        id="addProduct-form"
        className={styles.addProduct}
        onSubmit={handleAddProductSubmit}
      >
        <fieldset className={styles.addproduct_group}>
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            placeholder="A??ade un nombre"
            maxLength={20}
            name="productName"
            value={productName}
            onChange={handleProductValueInputChange}
          />
          <input
            type="text"
            className={`${styles.addproduct__text} inputtext`}
            placeholder="Escriba una peque??a descripci??n"
            maxLength={60}
            name="description"
            value={description}
            onChange={handleProductValueInputChange}
          />

          <CustomSelect
            selectProps={{
              selectName: 'section',
              selectTitle: 'Secci??n',
              classSelect: styles.addproduct__select,
              classTitle: styles.addproduct__optiontitle,
              optionValues: sections
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

          <label htmlFor="isFavourite" className="formLabel">
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
        {errorEntries.length !== 0 && (
          <div className={styles.errors}>
            <p className={styles.errors__title}>
              Error de validacion para los siguientes campos:{' '}
            </p>
            {imgFile === false && (
              <p className={styles.errors__item}>
                Solo se puede a??adir un producto con una imagen
              </p>
            )}
            <ul className={styles.errors__list}>
              {errorEntries.map((errorEntry) => (
                <li key={errorEntry} className={styles.errors__item}>
                  {errorEntry[0]}
                </li>
              ))}
            </ul>
          </div>
        )}
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
    </div>
  );
}
