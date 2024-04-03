import { Form, redirect } from "react-router-dom";
import Input from "./Input";
import { cheapTokenCreator } from "../util/local_storage";
import { uploadData } from "../util/http_requests";
import dataStore from "../store";


export default function UserForm({inputData, method}){
    
    return(
        <Form method={method} >
          <h3>Create User</h3>
            <Input 
                type="text" 
                name="full_name" 
                label="Full Name:" 
                defaultValue={inputData && inputData.full_name}
            />
            <Input type="email" name="email" label="Email:" defaultValue={inputData && inputData.email}/>
            <Input type="password" name="password" label="Password:" defaultValue={inputData && inputData.password}/>
            <Input type="password" name="confirm_password" label="Confirm Password:" defaultValue={inputData && inputData.confirm_password}/>
            <button type="submit">Save And Continue</button>
        </Form>
    )
}

export async function action({request, params}){
    const state = dataStore.getState();
    const isLoggedIn = state.auth.isAuthenticated;

    const method = request.method;
    const data = await request.formData();

    const userData = {
        full_name: data.get('full_name'),
        email : data.get('email'),
        password : data.get('password'),
        confirm_password : data.get('confirm_password'),
        token: cheapTokenCreator(data.get('email')),
        role: 'user'
    }
    if (userData.email === 'mega5admin@gmail.com') {
        userData.role = 'superAdmin'
    }
    
    console.log('userData on submit signup form', userData);

    if (method === 'PATCH') {
        const userId = params.userId;
        await uploadData({data: userData, url:`https://reactudemydb-default-rtdb.firebaseio.com/users/${userId}.json`, method: method});
    }else{
        await uploadData({data: userData, url: 'https://reactudemydb-default-rtdb.firebaseio.com/users.json', method: method});
    }

    if (isLoggedIn) {
        return redirect('/user/admin/users');
    }
 
    return redirect('/login');
}
