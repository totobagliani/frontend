/* eslint-disable comma-dangle */
import { UPLOADPRESET } from '../services/constants';

export const uploadFileToCloud = async (file) => {
  const url = process.env.REACT_APP_API_CLOUDINARY;
  const uploadPreset = UPLOADPRESET;

  const formData = new FormData();

  formData.append('upload_preset', uploadPreset);
  formData.append('file', file);

  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      const cloudinaryResult = await resp.json();
      if (cloudinaryResult.asset_id) {
        return cloudinaryResult.secure_url;
      }
      return cloudinaryResult.error.message;
    }
  } catch (error) {
    return error;
  }
};
