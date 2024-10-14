import React from 'react';
import {TodoItemProps} from "./TodoItem.interface.ts";
import s from './TodoItem.module.css';
import cn from 'classnames';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkbox.svg';
import { ReactComponent as CheckIconCompleted} from '../../assets/icons/checkbox-checked.svg';

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={s.TodoItem}>
      <div className={s.TodoItem__checkbox} onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? <CheckIconCompleted /> : <CheckIcon />}
      </div>
      <span
        onClick={() => toggleComplete(todo.id)}
        className={cn(s.TodoItem__text, {
          [s.TodoItem__text_completed]: todo.completed
        })}
      >
        {todo.text}
      </span>
      <button
        className={s.TodoItem__deleteButton}
        onClick={() => deleteTodo(todo.id)}
      ><DeleteIcon /></button>
    </div>
  );
};

