"use client"
import Tabs from "@/components/Tabs";
import TasksCard from "@/components/TasksCard";
import UsersTable from "@/components/UsersTable";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const tasksData = useSelector((data) => data.tasks.tasks);
  const userData = useSelector((data) => data.user.users);
  const [activeTab, setActiveTab] = useState('Users');

  const tabs = [
    { label: 'Users', icon: '' },
    { label: 'Tasks', icon: '' },
  ];

  const users = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', role: 'Admin' },
    // Add more dummy data as needed
  ];

  const tasks = [
    { taskName: 'Task 1', userName: 'John Doe', taskDetails: 'Task details 1', period: '2 weeks', category: 'Development' },
    // Add more dummy data as needed
  ];

  return (
    <div className="container">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Users' && <UsersTable users={userData} />}
      {activeTab === 'Tasks' && <TasksCard tasks={tasksData} />}
    </div>
  )
}
