import useLocalStorage from './useLocalStorage';
import {Todo} from "../types.ts";


function useTodos(storageKey: string, initialTodos: Todo[] = []) {
  const [todos, setTodos] = useLocalStorage<Todo[]>(storageKey, initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  return {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    deleteCompleted
  };
}

export default useTodos;
