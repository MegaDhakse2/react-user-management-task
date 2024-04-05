import { Form, redirect } from "react-router-dom";
import { cheapTokenCreator } from "../util/local_storage";
import { fetchData, uploadData } from "../util/http_requests";
import dataStore from "../store";
import Input from "./UI/Input";
import classes from './UserForm.module.css';
import { useState } from "react";
import { userActions } from "../store/user";
import { useSelector } from "react-redux";

export default function UserForm({inputData, method}){
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
    const passwordsEquality = useSelector(state => state.user.signupValidations.passwordsEquality);
    const duplicateEmail = useSelector(state => state.user.signupValidations.emailDuplicate);

   
    return(
        <Form method={method} className={classes.form} >
          <h3>Create User</h3>
            <Input 
                type="text" 
                name="full_name" 
                label="Full Name:" 
                defaultValue={inputData && inputData.full_name}
                required
            />
            <Input 
                type="email" 
                name="email" 
                label="Email:" 
                defaultValue={inputData && inputData.email}
                required
            />
            {duplicateEmail && <small><p>Email Exists Already..</p></small>}

            <Input 
                type="password" 
                name="password" 
                label="Password:" 
                defaultValue={inputData && inputData.password}
                required
                minLength={8}
            />

            <Input 
                type="password" 
                name="confirm_password" 
                label="Confirm Password:" 
                defaultValue={inputData && inputData.confirm_password}
                required
                minLength={8}
            />
            {!passwordsEquality && <small><p>Passwords must be equal..</p></small>}

            <div className={classes.actions}>
                <button type="reset">Cancel</button>
                <button type="submit">
                        {(method === 'post') ? 
                            'Save And Continue'
                            :
                            'Update And Continue'}
                </button>
            </div>
        </Form>
    )
}

export async function action({request, params}){
    const state = dataStore.getState();
    const isLoggedIn = state.auth.isAuthenticated;

    //for validation purpose
    dataStore.dispatch(userActions.setPasswordsAreEqual())
    dataStore.dispatch(userActions.setEmailIsNotDuplicate())

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

    const rawUsers = await fetchData({filePath: 'users.json'});
    if(rawUsers){
        const users = Object.values(rawUsers)

        users.map(user=>{
            if (userData.email === user.email) {
                dataStore.dispatch(userActions.setEmailIsDuplicate())
                return null
            }
        })
    }

    if (userData.password !== userData.confirm_password) {
        dataStore.dispatch(userActions.setPasswordsAreNotEqual())
        return null
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
