import { Link, Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import UsersList from "../components/UsersList";
import { fetchData } from "../util/http_requests";

export default function ManageUsersPage(){
  const users = useLoaderData();
  
  console.log(users, 'users from admin users page');
    return(
        <> 
          <br/>
          <Link to='/user/admin/newuser'>Create New User</Link>
          <UsersList users={users}/>
          <Outlet/>
        </>
    )
}

export async function loader(){

  const rawUsers = await fetchData({filePath: 'users.json'});
    const users = Object.values(rawUsers)

    // const users = entries.map(([key, value]) => value);
    // console.log('users data in dashboard', users)

    return rawUsers
}