import classes from './UserHomePage.module.css';
import allUsersImg from '../../assets/images/all_users_image.jpg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserHomePage(){
    const currentUser = useSelector(state=> state.user.currentUser)

    return(
            <div className={classes.img_links}>
                <div>
                    <NavLink to='profile'>
                        <img src={allUsersImg} alt="My Profile Logo"></img>
                        <p>Profile</p>

                    </NavLink>
                </div>
                <div>
                    <NavLink to='dashboard'>
                        <img src={allUsersImg} alt="Dashboard Logo"></img>
                        <p>Dashboard</p>
                    </NavLink>
                </div>
                {(currentUser.role === 'superAdmin') &&
                <div>
                    <NavLink to='admin'>
                        <img src={allUsersImg} alt="Admin Logo"></img>
                        <p>Admin Space</p>
                    </NavLink>
                </div>}
            </div>
    )
}