/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react';
import { useForm } from './useForm';

describe('Given the useForm hook', () => {
  const initialForm = {
    name: 'Tomás Bagliani',
    email: 'tomy@gmail.com'
  };
  test('should return the default values', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('shouls change the value of formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [_, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'email',
          value: 'toto@toto.com'
        }
      });
    });

    const [values] = result.current;

    expect(values.email).toBe('toto@toto.com');

    expect(values).toEqual({ ...initialForm, email: 'toto@toto.com' });
  });
  test('shouls reset the value of formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'email',
          value: 'toto@toto.com'
        }
      });
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
