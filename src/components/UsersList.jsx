import { Link } from "react-router-dom"
import classes from './UsersList.module.css';
import profileLogo from '../assets/images/profile_male_logo.png';

export default function UsersList({users}){
    return(
        <div className={classes.users}>
             <h2>All Users!</h2>
             <ul className={classes.list}>
                {/* {users.map((user)=>( */}
                {/* {Object.entries(users).map(([key, user]) => (
                    <div key={Math.random().toFixed(2)}>
                        <li>{user.email}</li>
                        <li>{user.name}</li>
                        <Link to={key}>View Details</Link>
                    </div>
                ))} */}

                {Object.entries(users).map(([key, user]) => (
                <li key={key} className={classes.item}>
                    {/* <Link to={`/events/${event.id}`} > */}
                    <Link to={key} >
                    <img src={profileLogo} alt='profile image' />
                    <div className={classes.content}>
                        <h2>{user.full_name}</h2>
                        <p>{user.email}</p>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}