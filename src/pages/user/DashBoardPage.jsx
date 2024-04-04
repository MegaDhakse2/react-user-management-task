import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../util/http_requests"
import { useSelector } from "react-redux";

export default function DashBoardPage(){
    // const currentUser = useSelector(state=> state.user.currentUser);
    // const directFetchUsers = useLoaderData();
    // const users = Object.values(directFetchUsers);
    // const keys = Object.keys(directFetchUsers);
    // console.log(keys, 'keys from dashboard page');
    // console.log(directFetchUsers, 'object from firebase in dashboard')

    return(
        <h2>Dashboard</h2>
        // <> 
        // <h1>Welcome {currentUser.full_name}</h1>
        //     <h4>CurrentUser: {currentUser.email}</h4>
        //     <ul>
        //         {/* {users.map((user)=>( */}
        //         {Object.entries(directFetchUsers).map(([keys, user])=>(
        //             <li>{user.email}</li>
        //         ))}
        //     </ul>
        // </>
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