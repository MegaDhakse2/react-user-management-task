import { Link, Form, useRouteLoaderData } from "react-router-dom"

export default function MainNavigation(){
    const userToken = useRouteLoaderData('root');

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