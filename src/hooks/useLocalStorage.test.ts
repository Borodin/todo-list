import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with the given value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    expect(result.current[0]).toBe('initial');
  });

  test('should store and retrieve the value from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('key')).toBe(JSON.stringify('updated'));
  });
});
