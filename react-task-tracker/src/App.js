import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Manchester United vs Brighton',
        day: 'April 5th at 12:30 am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Mahdi bhaia work next step',
        day: 'March 31st at 9:00 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Prepare Abesh Course work',
        day: 'March 31st at 11:30 am',
        reminder: false,
    },

  ])

  // Add Task

  const addTask = (task) => {

    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) 

  }

  // Delete Task

  const deleteTask = (id) => {
    console.log("Delete: ", id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    console.log("Setting a Reminder for: ", id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks available right now')}
    </div>
  );

}

export default App;
