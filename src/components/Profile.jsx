import classes from './Profile.module.css';
import profileIcon from '../assets/images/profile_male_logo.png';

export default function Profile({user, currentUser}){
    return(
        <div className={currentUser ? classes.profile_block : classes.for_user_details}>
            <h2>{currentUser ? 'My Profile' : 'User Details'}</h2>
            <img src={profileIcon} alt="Profile Image" className={classes.image}/>
            <h3 className={classes.image_name}>{user.full_name}</h3>
            <div className={classes.user_details}>
                <p>Name: {user.full_name}</p>
                <p>Email: {user.email}</p>
                {(user.mobile) && 
                <p>Mobile: {user.mobile}</p>}
            </div>
        </div>
    )
}