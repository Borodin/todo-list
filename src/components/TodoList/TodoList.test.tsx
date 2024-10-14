import '@testing-library/jest-dom';
import { describe, expect, test} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import TodoItemStyle from "../TodoItem/TodoItem.module.css";

describe('TodoList Component', () => {
  const initialTodos = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true }
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  test('renders with initial todos and title', () => {
    const { getByText } = render(<TodoList storageKey="todos" initialTodos={initialTodos} />);
    expect(getByText('Todo List')).toBeInTheDocument();
    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(getByText('Test Todo 2')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList storageKey="todos" />);
    const input = getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input).toHaveValue('');
    expect(getByText('New Todo')).toBeInTheDocument();
  });

  test('adds a empty todo', () => {
    const { getByPlaceholderText } = render(<TodoList storageKey="todos" />);
    const input = getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: '\t ' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input).toHaveValue('\t ');
  });

  test('toggles a todo', () => {
    const { getByText } = render(<TodoList storageKey="todos" initialTodos={initialTodos} />);
    const todoText = getByText('Test Todo 1');
    fireEvent.click(todoText);
    expect(todoText).toHaveClass(TodoItemStyle.TodoItem__text_completed);
  });

  test('removes a todo', () => {
    const { getByText, queryByText, getAllByRole } = render(<TodoList storageKey="todos" initialTodos={initialTodos} />);
    const deleteButtons = getAllByRole('button')[1];
    expect(getByText('Test Todo 1')).toBeInTheDocument();
    fireEvent.click(deleteButtons);
    expect(queryByText('Test Todo 1')).not.toBeInTheDocument();
  });

  test('filters todos', () => {
    const { getByText, getByRole } = render(<TodoList storageKey="todos" initialTodos={initialTodos} />);
    const allButton = getByRole('button', { name: 'All' });
    const activeButton = getByRole('button', { name: 'Active' });
    const completedButton = getByRole('button', { name: 'Completed' });

    // All filter
    fireEvent.click(allButton);
    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(getByText('Test Todo 2')).toBeInTheDocument();

    // Active filter
    fireEvent.click(activeButton);
    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(() => getByText('Test Todo 2')).toThrow();

    // Completed filter
    fireEvent.click(completedButton);
    expect(() => getByText('Test Todo 1')).toThrow();
    expect(getByText('Test Todo 2')).toBeInTheDocument();
  });

  test('deletes all completed todos', () => {
    const { getByText, getByRole } = render(<TodoList storageKey="todos" initialTodos={initialTodos} />);
    const deleteCompletedButton = getByRole('button', { name: 'Delete completed' });

    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(getByText('Test Todo 2')).toBeInTheDocument();

    fireEvent.click(deleteCompletedButton);

    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(() => getByText('Test Todo 2')).toThrow();
  });
});
