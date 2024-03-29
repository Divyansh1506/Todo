"use client"
import "./globals.css";
import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("due")
  const [tasks, settasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  return (
    <div className="mycontainer">
        <hr />
        <Create
            tasks={tasks}
            setTasks={settasks}
            title={title}
            settitle={settitle}
            description={description}
            setDescription={setDescription}
            status={status}
            setStatus={setStatus}
            activeTask={activeTask}
            setActiveTask={setActiveTask}
        />

        <h2>Pending Tasks</h2>
        <Show
            tasks={tasks}
            settasks={settasks}
            settitle={settitle}
            setDescription={setDescription}
            setStatus={setStatus}
            setActiveTask={setActiveTask}
        />
    </div>
);
};


export default page
