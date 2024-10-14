import {Todo} from "../../types.ts";

export interface TodoListProps {
  storageKey: string;
  color?: string;
  title?: string;
  initialTodos?: Todo[];
}
