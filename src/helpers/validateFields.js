const isException = (term, exceptions) => exceptions.includes(term);

export const validateFields = (formValuesObj, exceptions = []) => {
  const formValidationObj = Object.fromEntries(
    Object.entries(formValuesObj)
      .filter(([key]) => isException(key, exceptions) === false)
      .map(([key]) => [key, false])
  );
  return formValidationObj;
};
