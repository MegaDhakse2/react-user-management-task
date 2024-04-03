import { json, redirect } from "react-router-dom";

export async function uploadData({data, url, method}){
    
    const response = await fetch(url, {
        // method: (method === 'post') ? 'POST' : 'PATCH',
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw json({
            message: 'An Error Occurred, Not able to create user!'
        },
        {
            status: 500
        })
    }
    const resData = await response.json();

    return resData;
}

export async function fetchData({filePath}){
    const response = await fetch('https://reactudemydb-default-rtdb.firebaseio.com/'+ filePath);

    if (!response.ok) {
        json(
            {
                message: 'Not able to fetch users, Try Again'
            },
            {
                status: 500
            }
        )
    }

    const resData = await response.json();
    console.log('users data from firebase', resData)
    return resData;
}