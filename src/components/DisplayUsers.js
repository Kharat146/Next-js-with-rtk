"use client"
import { removeUser } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";

const DisplayUsers = () => {
    const userData = useSelector((data)=>data.users);
    const dispatch = useDispatch();
    console.log("userData",userData)
    return (
        <div>
            <h3>User List</h3>
            {userData.map((item)=> 
            <div>{item.name} <button onClick={()=>dispatch(removeUser(item.id))}>delete</button></div>)}
        </div>
    )
}

export default DisplayUsers;