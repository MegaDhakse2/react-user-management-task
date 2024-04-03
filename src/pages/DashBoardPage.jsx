import { redirect, useLoaderData } from "react-router-dom";
import { fetchData } from "../util/http_requests"
import { useDispatch, useSelector } from "react-redux";

export default function DashBoardPage(){
    const currentUser = useSelector(state=> state.user.currentUser);
    const directFetchUsers = useLoaderData();
    const users = Object.values(directFetchUsers);
    const keys = Object.keys(directFetchUsers);
    console.log(keys, 'keys from dashboard page');
    console.log(directFetchUsers, 'object from firebase in dashboard')

    return(
        <> 
        <h1>This is DashBoard Page</h1>
            <h4>CurrentUser: {currentUser.email}</h4>
            <ul>
                {/* {users.map((user)=>( */}
                {Object.entries(directFetchUsers).map(([keys, user])=>(
                    <>
                        <li key={Math.random().toFixed(2)}>{user.email}</li>
                        <li key={Math.random().toFixed(2)}>{keys}</li>
                    </>
                ))}
            </ul>
        </>
    )
}

export async function loader(){

    const rawUsers = await fetchData({filePath: 'users.json'});
    // const users = Object.values(rawUsers)

    // const users = entries.map(([key, value]) => value);
    // console.log('users data in dashboard', users)
    // console.log('users data in dashboard', users)

    return rawUsers
}