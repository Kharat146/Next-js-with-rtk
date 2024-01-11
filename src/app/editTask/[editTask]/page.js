"use client"
import TaskForm from "@/components/TaskForm";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const editTask = ({ params }) => {
    const [task, setTask] = useState([]);
    const tasksData = useSelector((data) => data.tasks.tasks);
    const router = useRouter();

    useEffect(() => {
        const filterTaskData = tasksData.find(
          (item, index) => params.editTask === item.id,
        );
        setTask(filterTaskData);
      }, [params.viewTask])

    return (
        <div className=" flex flex-col bg-blue p-4 bg-emerald-200 text-black w-3/5 rounded-md shadow-md mx-auto">
            <h1 className="font-bold text-center text-2xl relative">
                <IoMdArrowRoundBack className="absolute mt-2" onClick={() => router.push("/")} />
                Edit Task
            </h1>
            <TaskForm task={task}/>
        </div>
    );
};

export default editTask;