import { redirect } from "react-router-dom";
import { getLocalStorageToken } from "../util/local_storage";
import dataStore from "../store";
import { authActions } from "../store/auth";

export function logoutAction(){
    dataStore.dispatch(authActions.onLogout());
    localStorage.removeItem('token');
    // localStorage.removeItem('currentUser');
    return redirect('/');
}

export function loader(){
    const token = getLocalStorageToken('token');
    if (token) {
        dataStore.dispatch(authActions.onLogout());
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');

    } 
    return redirect('/login')
}