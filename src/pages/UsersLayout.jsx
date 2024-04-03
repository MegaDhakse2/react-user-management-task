import { Outlet, redirect } from "react-router-dom";
import { getLocalStorageToken } from "../util/local_storage";
import PageLayout from "../components/PageLayout";
import MainNavigation from "../components/MainNavigation";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index1";

export default function UsersLayout(){
    const isLoggedIn = useSelector((state)=> state.auth.isAuthenticated)
    console.log(isLoggedIn, 'isAuthenticated state value')
    

    return(
            <PageLayout>
                <h1> this is users page layout!</h1>
                {/* <p> Counter: {counter}</p>
                <button onClick={increment}>Increment++</button> */}
                <MainNavigation/>
                <Outlet/>
            </PageLayout>
    )
}

export async function loader(){
    const token = getLocalStorageToken();
    if (!token) {
      return redirect('/login')  
    }
    return null
}