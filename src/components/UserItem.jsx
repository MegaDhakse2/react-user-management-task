import { Link, useSubmit } from "react-router-dom";

export function UserItem({user}){
  const submit = useSubmit();

  function startDeleteHandler() {
    const isProceed = window.confirm("Are you sure?");
    if (isProceed) {
      submit(null, {method:'DELETE'});
    }
  }

    return(
        <>
            <p>{user.full_name}</p>
            <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete User</button>
        </>
    )
}