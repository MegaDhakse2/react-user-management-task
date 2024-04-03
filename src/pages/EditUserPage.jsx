import { useRouteLoaderData } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function EditUserPage(){
    const userData = useRouteLoaderData('user_details');
    return(
        <>
        <h1>\Edit user page</h1>
         <UserForm inputData={userData} method='patch'/>
        </>

    )
}