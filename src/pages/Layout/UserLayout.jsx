import { Outlet, redirect,Navigate } from "react-router-dom";
import { getLocalStorageToken } from "../../util/local_storage";
import PageLayout from "../../components/UI/PageLayout";
import MainNavigation from "../../components/MainNavigation";
import { useSelector } from "react-redux";
import { router } from "../../App";
import classes from './UserLayout.module.css'

export default function UserLayout(){
    const isLoggedIn = useSelector((state)=> state.auth.isAuthenticated)
    console.log(isLoggedIn, 'isAuthenticated state value')

    return(
            <div className={classes.body}>
                <MainNavigation/>
                {/* <Navigate to="dashboard" replace={true} /> */}
                <Outlet/>
            </div>
    )
}

export async function loader(){
    const token = getLocalStorageToken();
    if (!token) {
      return redirect('/login')  
    }
    return null
}