"use client"
import { useState } from "react";
import { addUser } from "@/redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const userDispatch =() => {
        console.log("name",name)
        dispatch(addUser(name))
    }

    return (
        <div>
             <h3>user List</h3>
             <input 
                type="text" 
                placeholder="Add new user"
                onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={userDispatch}>Add User</button>
        </div>
    )
}

export default AddUser;