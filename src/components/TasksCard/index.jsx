"use client"
import { removeTask } from '@/redux/tasksSlice';
import { useRouter } from 'next/navigation';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TasksCard = ({ tasks }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.user.users);

  const userNameFunction = (id) => {
    const filterUserData = userData.find(
      (item, index) => id === item.id,
    );
    if(filterUserData) {
      return filterUserData.firstName + " " + filterUserData.lastName
    } else {
      return "-"
    }
  }

  return (
    <div className="flex  flex-col items-end w-full">
      <button className="m-4 bg-emerald-900 text-white p-4 rounded-lg font-bold w-48" onClick={()=> router.push("/addTask")}>Add Task</button>
      <div className="flex flex-wrap w-full">
      {tasks.map((task, index) => (
        <div key={index} className="w-full max-w-96 m-8">
          <>{console.log("task",task)}</>
          <div className="card">
            <h2 className="text-xl font-bold flex justify-between">
              {task.taskName}
              <span className='flex'>
                <FaRegEdit className='mx-2'onClick={()=> router.push("/editTask/"+task.id)}/> 
                <MdDelete className='mx-2' onClick={()=> dispatch(removeTask(task.id))}/>
              </span>
            </h2>
            <p>User: {userNameFunction(task.userName)}</p>
            <p>Details: {task.taskDetails}</p>
            <p>Period: {task.taskPeriod}</p>
            <p>Category: {task.taskCategory}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TasksCard;
