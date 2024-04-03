import { Link, Outlet, redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import MainNavigation from "../components/MainNavigation";
import { getLocalStorageToken } from "../util/local_storage";
import { useSelector } from "react-redux";
export default function RootLayout(){
    const isLoggedIn = useSelector(state=>state.auth.isAuthenticated)
    console.log(isLoggedIn, 'isAuthenticated state value')

    return(
        <div>
            <PageLayout>
                <h1>This is Root Page</h1>
                <MainNavigation/>
                <Outlet/>
            </PageLayout>
        </div>
    )
}

export function loader(){
    const token = getLocalStorageToken();
    if (token) {
        return redirect('/user');
    }
    return token;
}
