import { Link, Outlet, redirect } from "react-router-dom";
import dataStore from "../store";

export default function AdminPanelPage(){
    
    return(
        <>
            <h1>Admin Panel!</h1>
            <Link to='users'>Manage Users</Link>
            <Outlet/>
        </>
    )
}

export function loader(){
    const state = dataStore.getState();
    const currentUser = state.user.currentUser;
    if (currentUser.role !== 'superAdmin') {
        return redirect('/user');
    }
    return null
}