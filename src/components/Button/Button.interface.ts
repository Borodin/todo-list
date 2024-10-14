export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
}
