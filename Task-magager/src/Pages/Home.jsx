import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState('todo'); // Default status is 'To-Do'

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle task creation
  const handleTaskCreate = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription || !taskDueDate) {
      alert('Please fill in all fields!');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
      status: taskStatus,
    };

    setTasks([...tasks, newTask]);

    // Reset form fields
    setTaskName('');
    setTaskDescription('');
    setTaskDueDate('');
    setTaskStatus('todo'); // Reset status to 'To-Do'
    alert('Task Created Successfully!');
  };

  // Handle status change for tasks
  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-gradient-to-r from-orange-400 to-yellow-500 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-white">
            <Link to="/" className="hover:text-yellow-200 transition">
              Task Manager
            </Link>
          </div>

          {/* Links Section for Desktop */}
          <ul className="hidden md:flex space-x-8 text-white text-lg">
            <li>
              <Link to="/home" className="hover:text-yellow-200 transition duration-300">
                DashBoard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-yellow-200 transition duration-300">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-yellow-200 transition duration-300">
                Logout
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-orange-500 p-4">
            <ul className="space-y-4 text-white text-lg">
              <li>
                <Link to="/home" className="block hover:text-yellow-200 transition duration-300">
                  DashBoard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="block hover:text-yellow-200 transition duration-300">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/logout" className="block hover:text-yellow-200 transition duration-300">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Page Content */}
      <div className="p-6">
        <h1 className="text-4xl text-center text-orange-600 mb-6">Welcome to Your Task Manager</h1>

        {/* Task Creation Form */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Create a New Task</h2>

          <form onSubmit={handleTaskCreate}>
            <div className="mb-4">
              <label htmlFor="taskName" className="block text-lg text-gray-700">Task Name</label>
              <input
                type="text"
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter task name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="taskDescription" className="block text-lg text-gray-700">Task Description</label>
              <textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter task description"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="taskDueDate" className="block text-lg text-gray-700">Due Date</label>
              <input
                type="date"
                id="taskDueDate"
                value={taskDueDate}
                onChange={(e) => setTaskDueDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="taskStatus" className="block text-lg text-gray-700">Task Status</label>
              <select
                id="taskStatus"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="todo">To-Do</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition"
            >
              Create Task
            </button>
          </form>
        </div>

        {/* Kanban-style Task Board */}
        <div className="flex space-x-4">
          {/* To-Do Column */}
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">To-Do</h3>
            {tasks.filter(task => task.status === 'todo').map((task) => (
              <div key={task.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-lg text-orange-600">{task.name}</h4>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
                <button
                  onClick={() => handleStatusChange(task.id, 'pending')}
                  className="mt-2 py-1 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Move to Pending
                </button>
              </div>
            ))}
          </div>

          {/* Pending Column */}
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Pending</h3>
            {tasks.filter(task => task.status === 'pending').map((task) => (
              <div key={task.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-lg text-orange-600">{task.name}</h4>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
                <button
                  onClick={() => handleStatusChange(task.id, 'done')}
                  className="mt-2 py-1 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Move to Done
                </button>
              </div>
            ))}
          </div>

          {/* Done Column */}
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Done</h3>
            {tasks.filter(task => task.status === 'done').map((task) => (
              <div key={task.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-lg text-orange-600">{task.name}</h4>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


