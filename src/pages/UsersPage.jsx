import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { getLocalStorageToken } from "../util/local_storage";
import PageLayout from "../components/PageLayout";
import MainNavigation from "../components/MainNavigation";

export default function UsersPageLayout(){
    return(
            <PageLayout>
                <h1> this is users page layout!</h1>
                <MainNavigation/>
                <Outlet/>
            </PageLayout>
    )
}

export function loader(){
    const token = getLocalStorageToken();
    if (!token) {
      return redirect('/login')  
    }
    return null
}