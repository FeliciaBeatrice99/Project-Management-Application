import { useState } from "react";

export default function Project({ data, deleteValue }) {
  let [enteredTasks, setEnteredTasks] = useState("");
  let [tasks, setTasks] = useState([]);

  function handleTask() {
    if (enteredTasks.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, enteredTasks]);
      setEnteredTasks("");
    }
  }

  function handleClearTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, id) => id !== index));
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{data.title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={() => deleteValue(data)}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{data.description}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{data.date}</p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={(e) => setEnteredTasks(e.target.value)}
            value={enteredTasks}
            placeholder="Enter a new task"
          />
          <button className="text-stone-700 hover:text-stone-950" onClick={handleTask}>
            Add Task
          </button>
        </div>
        {tasks.length === 0 ? (
          <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
        ) : (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task, id) => (
              <li key={id} className="flex justify-between my-4">
                <span>{task}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={() => handleClearTask(id)}>
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
