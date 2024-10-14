import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ButtonProps } from './Button.interface';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    type: 'primary',
    onClick: vi.fn(),
    disabled: false,
    children: 'Click Me',
  };

  it('calls onClick handler when clicked', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  it('is enabled when disabled prop is false', () => {
    render(<Button {...defaultProps} disabled={false} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeEnabled();
  });
});
