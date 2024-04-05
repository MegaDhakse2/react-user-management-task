import { Link, Form, NavLink } from "react-router-dom"
import { getLocalStorageToken } from "../util/local_storage"
import { useSelector } from "react-redux";
import classes from './MainNavigation.module.css';
import app_logo from '../assets/images/app_logo.jpg';

export default function MainNavigation(){
    const userToken = getLocalStorageToken();
    const currentUser = useSelector(state => state.user.currentUser);
    console.log(userToken)
    console.log(currentUser.role, 'currentUser role')

    return(
        <header className={classes.header}>
            <Link to='/user' style={{textDecoration:'none'}}>
            <div className={classes.title} >
                <img 
                    src={app_logo} 
                    alt="Study Logo"
                    className={classes.logo}
                />
                <h1>Learn More Community</h1>
            </div>
            </Link>
        <nav className={classes.nav}>  
            <ul className={classes.list}>
                {
                !userToken 
                    ?   <>  
                            <li>
                                <NavLink to='/signup'>
                                    Signup
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>
                                    Login
                                </NavLink>
                            </li>
                        </>
                    :
                        <>
                            <li>
                                <NavLink to='/user/profile'>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/user/dashboard'>
                                    Dashboard
                                </NavLink>
                            </li>
                            {(currentUser.role === 'superAdmin') &&
                                <li>
                                    <NavLink to='/user/admin'>
                                        Admin
                                    </NavLink>
                                </li>
                            }
                            <span>
                                <Form method="post" action='/user/logout'>
                                    <button className={classes.del_but}>Logout</button>
                                </Form>
                            </span>
                        </>
                }
            </ul>

        </nav>
        
        </header>
    )
}