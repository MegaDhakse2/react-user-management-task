import { Link, Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import MainNavigation from "../components/MainNavigation";

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