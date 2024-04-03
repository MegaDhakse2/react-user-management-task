import { Link, Form, useRouteLoaderData } from "react-router-dom"
import { getLocalStorageToken } from "../util/local_storage"
import { useSelector } from "react-redux";

export default function MainNavigation(){
    const userToken = getLocalStorageToken();
    const currentUser = useSelector(state => state.user.currentUser);
    console.log(userToken)
    console.log(currentUser.role, 'currentUser role')

    return(
        <>  {
            !userToken 
                ?
                <>
                 <span><Link to='/signup'>Signup</Link></span>
                 <span>'   ' </span>
                 <span><Link to='/login'>Login</Link></span>
                 
                </>
                :
                <>
                 <span><Link to='/user/profile'>My Profile</Link></span>
                 <span>'   ' </span>
                 <span><Link to='/user/dashboard'>Dashboard</Link></span>

                { (currentUser.role === 'superAdmin') &&
                 
                 <>
                 <span>'   ' </span>
                 <span><Link to='/user/admin'>Admin</Link></span>
                 </>}

                 <span>
                    <Form method="post" action='/user/logout'>
                        <button>Logout</button>
                    </Form>
                    </span>
                </>
            }
        </>
    )
}