import React from 'react';
import {ButtonProps} from "./Button.interface.ts";
import s from './Button.module.css';
import cn from 'classnames';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={cn(s.Button, {
      [s.Button_primary]: props.type === 'primary',
      [s.Button_secondary]: props.type === 'secondary'
    })}
            onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}