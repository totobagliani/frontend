/* eslint-disable comma-dangle */
import { useState } from 'react';

// Form values es un objeto con keys nombre de campos y values a cero;
// exception array de valores de Strings con las keys a no verificar

const isException = (term, exceptions) =>
  exceptions.some((exception) => exception === term);

export const useValidationForm = (formValuesObj, exceptions = []) => {
  // en initialState iria los campos a validar
  const initialState = Object.fromEntries(
    Object.entries(formValuesObj)
      .filter(([key]) => isException(key, exceptions) === false)
      .map(([key]) => [key, false])
  );

  const [formError, setFormError] = useState(initialState);

  const handleformErrorChange = () => {
    console.log(formError);
    const errorEntries = Object.entries(formError).filter(
      (item) => item[1] === false
    );
    console.log({ errorEntries });
    setFormError(Object.fromEntries(errorEntries));
    console.log({ formError });
  };

  return [formError, handleformErrorChange];
};
