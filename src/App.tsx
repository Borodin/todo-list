import './App.css'
import {TodoList} from './components'

function App() {
  return (
    <>
        <TodoList title="Fitures" storageKey="todos" color="#F0CE49" initialTodos={[
          {
            "id": 1,
            "text": "Create a new project using Vite",
            "completed": true
          },
          {
            "id": 2,
            "text": "Design the UI/UX for the Todo List",
            "completed": true
          },
          {
            "id": 3,
            "text": "Set up Vitest for unit testing",
            "completed": true
          },
          {
            "id": 4,
            "text": "Implement the Todo List functionality",
            "completed": true
          },
          {
            "id": 5,
            "text": "Add a favicon to the project",
            "completed": true
          },
          {
            "id": 6,
            "text": "Handle creation of todos using the Enter key",
            "completed": true
          },
          {
            "id": 7,
            "text": "Add functionality to filter todos",
            "completed": true
          },
          {
            "id": 8,
            "text": "Implement the deletion of completed todos",
            "completed": true
          },
          {
            "id": 9,
            "text": "Implement the deletion of an individual todo",
            "completed": true
          },
          {
            "id": 10,
            "text": "Add functionality to toggle todo completion",
            "completed": true
          },
          {
            "id": 11,
            "text": "Document the project in README.md",
            "completed": true
          },
          {
            "id": 12,
            "text": "Configure (CI/CD)",
            "completed": true
          },
          {
            "id": 13,
            "text": "Add Prettier for code formatting",
            "completed": false
          },
          {
            "id": 14,
            "text": "Optimize performance and assess best practices",
            "completed": false
          }
        ]}/>
        <TodoList title="Pasta" storageKey="pasta" initialTodos={[
        {
          id: 1,
          text: "🍅 Tomato",
          completed: false
        },
        {
          id: 2,
          text: "🧄 Garlic",
          completed: false
        },
        {
          id: 3,
          text: "🌿 Basil",
          completed: false
        },
        {
          id: 4,
          text: "🧀 Parmesan",
          completed: false
        },
        {
          id: 5,
          text: "🍝 Pasta",
          completed: false
        },
        {
          id: 6,
          text: "🧂 Salt",
          completed: false
        },
        {
          id: 7,
          text: "🌶️ Pepper",
          completed: false
        },
        {
          id: 8,
          text: "🫒 Olive oil",
          completed: false
        }]} color="#A8D672" />
        <TodoList title="Bugs" storageKey="todos3" color="#EB7A53" />
        <TodoList title="Ideas" storageKey="todos4" color="#98B7DB" />
    </>
  )
}

export default App
