import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1>Work To-Dos</h1>
        <input type="text" id="new-task-title" placeholder="New item..." />
        <textarea id="new-task-desc" placeholder="Description..."></textarea>
        <button id="add-task-btn">Add Task</button>
        
        <div id="filters">
            <button data-filter="Show All">All</button>
            <button data-filter="Completed">Completed</button>
            <button data-filter="Incomplete">Incomplete</button>
            <button id="fetch-tasks-btn">Fetch Tasks</button>
        </div>
        
        <ul id="task-list"></ul>
    </div>
    <script type="module" src="js/app.js"></script>
    </>
  )
}

export default App
