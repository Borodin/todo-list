import React, {useState} from 'react';
import {TodoItem} from '../index.ts';
import useTodos from "../../hooks/useTodos.ts";
import {TodoListProps} from "./TodoList.interface.ts";
import s from './TodoList.module.css';

type TodoListFilter = 'all' | 'active' | 'completed';
import {ReactComponent as AddIcon} from '../../assets/icons/add.svg';
import {Button} from "../Button/Button.tsx";

export const TodoList: React.FC<TodoListProps> = ({storageKey, color = '#F0CE49', title = 'Todo List', initialTodos = []}) => {
  const [filter, setFilter] = useState<TodoListFilter>('all');
  const {todos, addTodo, toggleComplete, deleteTodo, deleteCompleted} = useTodos(storageKey, initialTodos);
  const [input, setInput] = useState('');


  const handleAddTodo = () => {
    if (input.trim() === '') return;
    addTodo(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddTodo();
  }

  // const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <h1 className={s.TodoList__title}>{title}</h1>
      <div className={s.TodoList} style={{
        '--list-color': color
      } as React.CSSProperties}>
        <div className={s.TodoList__wrapper}>
          <div className={s.TodoList__header}>
            <input
              className={s.TodoList__input}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
            />
            <button
              className={s.TodoList__button}
              onClick={handleAddTodo} disabled={input.trim() === ''}
              title="Press Enter to add"
            ><AddIcon/></button>
          </div>
          <ul className={s.TodoList__list}>
            {todos.filter(todo => {
              if (filter === 'all') return true;
              if (filter === 'active') return !todo.completed;
              if (filter === 'completed') return todo.completed;
            }).map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
        <div className={s.TodoList__footer}>
          {/*<span>{itemsLeft} items left</span>*/}
          <div className={s.TodoList__mode}>
            <Button onClick={() => setFilter('all')} type={filter === 'all' ? 'default' : 'secondary'}>All</Button>
            <Button onClick={() => setFilter('active')} type={filter === 'active' ? 'default' : 'secondary'}>Active</Button>
            <Button onClick={() => setFilter('completed')} type={filter === 'completed' ? 'default' : 'secondary'}>Completed</Button>
          </div>
          <Button type="primary" onClick={() => deleteCompleted()} disabled={todos.every(todo => !todo.completed)}>
            Delete completed
          </Button>
        </div>
      </div>
    </>
  );
};
