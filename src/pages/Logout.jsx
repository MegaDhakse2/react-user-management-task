import { redirect } from "react-router-dom";
import { getLocalStorageToken } from "../util/local_storage";

export function logoutAction(){
    localStorage.removeItem('token');
    return redirect('/');
}

export function loader(){
    const token = getLocalStorageToken('token');
    if (token) {
         localStorage.removeItem('token');
    } 
    return redirect('/login')
}