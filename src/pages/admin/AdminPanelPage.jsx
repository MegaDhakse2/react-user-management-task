import { Link, NavLink, Outlet, redirect } from "react-router-dom";
import dataStore from "../../store";
import classes from './AdminPanelPage.module.css';
import allUsersImg from '../../assets/images/all_users_image.jpg';

export default function AdminPanelPage(){
    
    return(
        <div className={classes.admin_panel}>  
            <div className={classes.admin_nav}>
                <div>
                    <NavLink to='users'>
                        <img src={allUsersImg} alt="all users logo"></img>
                        <p>Manage Users</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/user/admin/newuser'>
                        <img src={allUsersImg} alt="create user logo"></img>
                        <p>Create New User</p>
                    </NavLink>
                </div>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
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