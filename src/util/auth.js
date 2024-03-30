import { json, redirect } from "react-router-dom";
import { fetchData } from "./http_requests";
import { getLocalStorageToken } from "./local_storage";

export async function authenticateUser({auth_user}){
    const rawUsers = await fetchData({filePath: 'users.json'});
    const allUsers = Object.values(rawUsers);
    const user = allUsers.find(user => user.email === auth_user.email && user.password === auth_user.password);
    // if (user) {
    //     if (user.password === auth_user.password) {
    //         return user
    //     } else{
    //         throw json({
    //             message: 'wrong credentials entered!'
    //         })
    //     }
    // } else{
    //     throw json({
    //         message: 'Could not find any users!'
    //     })
    // }
    if (!user) {
        throw json({
                    message: 'Could not find any users!'
                },{status: 422}
                )
    }

    return user;
}

export function checkAuthLoader(){
    const token = getLocalStorageToken('token');
    if (!token) {
        return redirect('/')
    }
}