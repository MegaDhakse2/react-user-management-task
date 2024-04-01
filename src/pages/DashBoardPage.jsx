import { redirect, useLoaderData } from "react-router-dom";
import { fetchData } from "../util/http_requests"
import { getLocalStorageToken } from "../util/local_storage";
import { useEffect } from "react";

export default function DashBoardPage(){

    const data = useLoaderData();

    const users = data;

    return(
        <> 
        <h1>This is DashBoard Page</h1>
            <ul>
                {users.map((user)=>(
                    <li key={user.token}>{user.email}</li>
                ))}
            </ul>
        </>
    )
}

export async function fetchUsers(){

    const rawUsers = await fetchData({filePath: 'users.json'});
    const users = Object.values(rawUsers)

    // const users = entries.map(([key, value]) => value);
    console.log('users data in dashboard', users)

    return users
}