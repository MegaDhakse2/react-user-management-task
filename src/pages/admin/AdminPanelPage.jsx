import { Outlet, redirect } from "react-router-dom";
import dataStore from "../../store";
import classes from './AdminPanelPage.module.css';
import allUsersImg from '../../assets/images/all_users_image.jpg';
import ImageNavLink from "../../components/UI/ImageNavLink";
import SideNavBar from "../../components/UI/SideNavBar";
import { Suspense } from "react";

export default function AdminPanelPage(){
    
    return(
        <div className={classes.admin_panel}>  
            <SideNavBar>
                <ImageNavLink 
                    to='users' 
                    src={allUsersImg} 
                    alt="all users logo"
                    imageLabel={'Manage Users'}
                />
                <ImageNavLink 
                    to='/user/admin/newuser' 
                    src={allUsersImg} 
                    alt="create user logo"
                    imageLabel={'Create New User'}
                />
            </SideNavBar>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
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