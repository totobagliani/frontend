import { useState } from 'react';

export const useImgData = () => {
  const [imgFile, setimgFile] = useState(null);

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setimgFile(reader.result);
      });
      reader.readAsDataURL(target.files[0]);
    }
  };

  return [imgFile, handleFileChange];
};
