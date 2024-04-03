import { Link } from "react-router-dom"

export default function UsersList({users}){
    return(
        <>
            <h5>All Users!</h5>
             <ul>
                {/* {users.map((user)=>( */}
                {Object.entries(users).map(([key, user]) => (
                    <div key={Math.random().toFixed(2)}>
                        <li>{user.email}</li>
                        <li>{user.name}</li>
                        <Link to={key}>View Details</Link>
                    </div>
                ))}
            </ul>
        </>
    )
}