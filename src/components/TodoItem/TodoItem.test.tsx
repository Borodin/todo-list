import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import { vi } from 'vitest';
import { Todo } from '../../types';

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test task',
    completed: false,
  } as Todo;

  const mockToggleComplete = vi.fn();
  const mockDeleteTodo = vi.fn();

  test('display of task text', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );

    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  test('toggling task state on click', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );

    const taskText = screen.getByText('Test task');
    fireEvent.click(taskText);

    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test('deleting task on button click', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
});
