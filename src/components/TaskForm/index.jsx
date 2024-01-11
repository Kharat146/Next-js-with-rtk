"use client"
import { addTask, editTask } from '@/redux/tasksSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

const TaskForm = ({ task }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');
    const [userName, setUserName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    const [taskPeriod, setTaskPeriod] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [errors, setErrors] = useState({});
    const userData = useSelector((data) => data.user.users);

    useEffect(() => {
        if (task) {
            setTaskName(task.taskName)
            setUserName(task.userName)
            setTaskDetails(task.taskDetails)
            setTaskPeriod(task.taskPeriod)
            setTaskCategory(task.taskCategory)
        }
    }, [task])
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const errors = {};
        if (!taskName) errors.taskName = 'Task name is required';
        // if (!userName) errors.userName = 'User name is required';
        if (!taskDetails) errors.taskDetails = 'Task details are required';
        if (!taskPeriod) errors.taskPeriod = 'Task period is required';
        if (!taskCategory) errors.taskCategory = 'Task category is required';

        if (Object.keys(errors).length === 0) {
            if (task) {
                const editObject = {
                    editTaskId: task?.id,
                    editTaskDetails: { taskName, userName, taskDetails, taskPeriod, taskCategory }
                }
                dispatch(editTask(editObject));
                setTaskName("");
                setUserName("");
                setTaskDetails("");
                setTaskPeriod("");
                setTaskCategory("");
                router.push("/");
            } else {
                dispatch(addTask({ taskName, userName, taskDetails, taskPeriod, taskCategory }));
                setTaskName("");
                setUserName("");
                setTaskDetails("");
                setTaskPeriod("");
                setTaskCategory("");
                router.push("/");
            }
        } else {
            // Form has errors
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-full mt-8 mx-8 ">
            <div className="mb-4">
                <label htmlFor="taskName" className="block mb-2 font-bold">
                    Task Name:
                </label>
                <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className={`w-full p-2 border rounded-md ${errors.taskName && 'border-red-500'}`}
                />
                {errors.taskName && <p className="text-red-500 mt-1">{errors.taskName}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="userName" className="block mb-2 font-bold">
                    User Name:
                </label>
                <select
                    id="taskPeriod"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={`w-full p-2 border rounded-md ${errors.taskPeriod && 'border-red-500'}`}
                >
                    <option value="#">Select user</option>
                    {userData.map((data, index) => {
                        return (

                            <option value={data.id}>{data.firstName + " " + data.lastName}</option>
                        )
                    }
                    )}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="taskDetails" className="block mb-2 font-bold">
                    Task Details:
                </label>
                <textarea
                    id="taskDetails"
                    value={taskDetails}
                    onChange={(e) => setTaskDetails(e.target.value)}
                    className={`w-full p-2 border rounded-md ${errors.taskDetails && 'border-red-500'}`}
                />
                {errors.taskDetails && <p className="text-red-500 mt-1">{errors.taskDetails}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="taskPeriod" className="block mb-2 font-bold">
                    Task Period:
                </label>
                <select
                    id="taskPeriod"
                    value={taskPeriod}
                    onChange={(e) => setTaskPeriod(e.target.value)}
                    className={`w-full p-2 border rounded-md ${errors.taskPeriod && 'border-red-500'}`}
                >
                    <option value="">Select Period</option>
                    <option value="gg">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                {errors.taskPeriod && <p className="text-red-500 mt-1">{errors.taskPeriod}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="taskCategory" className="block mb-2 font-bold">
                    Task Category:
                </label>
                <select
                    id="taskCategory"
                    value={taskCategory}
                    onChange={(e) => setTaskCategory(e.target.value)}
                    className={`w-full p-2 border rounded-md ${errors.taskCategory && 'border-red-500'}`}
                >
                    <option value="">Select Category</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="study">Study</option>
                </select>
                {errors.taskCategory && <p className="text-red-500 mt-1">{errors.taskCategory}</p>}
            </div>

            <button type="submit" className=" bg-emerald-900 text-white font-bold p-2 rounded-md w-full mb-4 mt-2">
                Submit
            </button>
        </form>
    );
};

export default TaskForm;
