/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { renderHook, act } from '@testing-library/react';
import { useImgData } from './useImgData';

describe('Given the useImgFata', () => {
  const dataImage = new File(
    ['data:image/jpeg'],
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAN6BLADASIAAhEBAxEB/8QAHgAAAQQDAQEBAAAAAAAAAAAABAIDBQYAAQcICQr/xABiEAABAwIEAgYGBgcFBAcEARUBAgMRAAQFEiExBkEHEyJRYXEIFDKBkaEVI0KxwdEJJDNSYuHwFkNygvElNFOSFyY1RGOisgpUZHODNkV0k8IYJ1WEs9IoOGWUw3WFo6S0/8QAGwEBAQEBAQEBAQAAAAAAAAAAAAECAwQFBgf/xAA3EQACAgEDAwIEBQMEAgMBA...'
  );
  const blob = new Blob([dataImage]);
  test('first test', () => {
    const { result } = renderHook(() => useImgData());

    const [_, handleFileChange] = result.current;

    act(() => {
      handleFileChange({
        target: {
          files: [blob]
        }
      });
    });

    expect(result.current[0]).toBe(false);
  });
});
