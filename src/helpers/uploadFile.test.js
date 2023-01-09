/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import { uploadFileToCloud } from './uploadFile';

describe('Given the uploadFileToCloud helper', () => {
  const file = new File([''], 'filetest.jpg', { type: 'image/jpeg' });

  const cloudinaryReponse = {
    asset_id: '9b23d3b0dc3c18f8d7e6a3d8f06ee45d',
    public_id: 's3cmktctic1m9piw80cn',
    version: 1655060500,
    version_id: 'de2a0409bb68cda2afb7ee7f16d02b81',
    signature: '3686615c82bc42f87f045b51a12bd05c3f716068',
    width: 1366,
    height: 768,
    format: 'jpg',
    resource_type: 'image',
    created_at: '2023-01-09T09:40:40Z',
    tags: [],
    bytes: 132394,
    type: 'upload',
    etag: '34691c36e1bd8cba8b39df190f8d6c71',
    placeholder: false,
    url:
      'https://res.cloudinary.com/dxae9dngq/image/upload/v1673205938/eer06lpxlptdzal729av.jpg',
    secure_url:
      'https://res.cloudinary.com/dxae9dngq/image/upload/v1673205938/eer06lpxlptdzal729av.jpg',
    access_mode: 'public',
    original_filename: 'venom_2_converted'
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('send file to cloudinary', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: true, result: cloudinaryReponse })
      })
    );

    await uploadFileToCloud(file);

    expect(fetchMock).toHaveBeenCalled();
  });
});
