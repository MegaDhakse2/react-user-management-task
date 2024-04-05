import { json, redirect } from "react-router-dom";
import { fetchData } from "./http_requests";
import { getLocalStorageToken } from "./local_storage";

export async function authenticateUser({auth_user}){
    const rawUsers = await fetchData({filePath: 'users.json'});
    const allUsers = Object.values(rawUsers);
    const user = allUsers.find(user => user.email === auth_user.email);
    let passwordMatch = true;
    if (user) {
        passwordMatch = user.password === auth_user.password
    }
    if (!user) {
        throw json({
                    message: 'Could not find any users! Try Login Again'
                },{status: 422}
                )
    }
    if (!passwordMatch) {
        throw json({
                    message: 'Wrong Password!!, Try Login Again'
                },{status: 422}
                )
    }
    return user;
}

