"use client"
import style from "./table.module.css"
import { useRouter } from 'next/navigation';

const UsersTable = ({ users }) => {
    const router = useRouter();

    return (
        <div className="userTable flex flex-col items-end">
            <button className="m-4 bg-emerald-900 text-white p-4 rounded-lg font-bold w-48" onClick={() => router.push("/addUser")}>Add User</button>
            <>{console.log("users.length,",users.length)}</>
            <table className={"table " + style.table}>
                <thead>
                    <tr>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>First Name</th>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>Last Name</th>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>Email</th>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>Phone</th>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>Address</th>
                        <th className={`${style.tableRow} ${style.tableRowHeader}`}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className={style.tableRow}>{user.firstName}</td>
                            <td className={style.tableRow}>{user.lastName}</td>
                            <td className={style.tableRow}>{user.email}</td>
                            <td className={style.tableRow}>{user.phoneNumber}</td>
                            <td className={style.tableRow}>{user.address}</td>
                            <td className={style.tableRow}>{user.role}</td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td rowSpan="2" colSpan="6" className={style.tableRow}><span className="text-center w-full inline-block">No users</span></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
