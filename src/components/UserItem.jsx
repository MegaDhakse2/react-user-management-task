import { Link, useSubmit } from "react-router-dom";
import Profile from "./Profile";
import classes from './UserItem.module.css';

export function  UserItem({user}){
  const submit = useSubmit();

  function startDeleteHandler() {
    const isProceed = window.confirm("Are you sure?");
    if (isProceed) {
      submit(null, {method:'DELETE'});
    }
  }

    return(
        <div className={classes.user_item}>
            <div className={classes.profile_block}>
              <Profile user={user}/>
            </div>
            <div className={classes.actions}>
              <button className={classes.edit_but}><Link to="edit">Edit</Link></button>
              <button className={classes.delete_but} onClick={startDeleteHandler}>Delete User</button>
            </div>
        </div>
    )
}