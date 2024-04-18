import { json, redirect } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
            message: 'An Error Occurred, Not able to upload Data!'
        },
        {
            status: 500
        })
    }
    const resData = await response.json();

    return resData;
}

export async function fetchData({url}){
    const response = await fetch(url);

    if (!response.ok) {
        throw json(
            {
                message: 'Unable to fetch data, Try Again'
            },
            {
                status: 500
            }
        )
    }else if(response === null){
        throw json(
            {
            message: 'No data found!'
            },
            {
                status:404
            }
        )
    }

    const resData = await response.json();
    console.log('Data from firebase', resData)
    return resData;
}

export async function uploadFile({file, storage, location}){
     
    //Upload file to firebase Storage
        //Reference to the desired location in Firebase Storage
        const storageRef = ref(storage, location)
        try {
            const uploadTask = uploadBytesResumable(storageRef, file);
            await uploadTask;
            
            //Getting firebase storage image url
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            throw json(
                {
                    message: error.message || 'Error in uploading file!!'
                },
                {
                    status: error.status || 500
                }
            )
         }
}

export async function deleteData({url}){
    const response = await fetch(url , {
        method: 'DELETE',
    })

    if (!response.ok) {
        throw json(
            {
            message: 'Could not delete!'
        },
        {
            status:500
        }
        )
    }
}       