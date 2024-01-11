"use client"
import TaskForm from "@/components/TaskForm";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';


const addTask = () => {
    const router = useRouter();

    return (
        <div className=" flex flex-col bg-blue p-4 bg-emerald-200 text-black w-3/5 rounded-md shadow-md mx-auto">
            <h1 className="font-bold text-center text-2xl relative">
                <IoMdArrowRoundBack className="absolute mt-2" onClick={() => router.push("/")} />
                Add Task
            </h1>
            <TaskForm />
        </div>
    );
};

export default addTask;