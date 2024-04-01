import { Link, Outlet, redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import MainNavigation from "../components/MainNavigation";
import { getLocalStorageToken } from "../util/local_storage";

export default function RootLayout(){
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
    console.log(token, 'token');
    if (!token) {
       
    }
    return token;
}
