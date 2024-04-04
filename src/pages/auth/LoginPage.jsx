import { redirect } from "react-router-dom";
import { getLocalStorageToken, setLocalToken } from "../../util/local_storage";
import { authenticateUser } from "../../util/auth";
import LoginForm from "../../components/LoginForm";
import dataStore from "../../store";
import { userActions } from "../../store/user";
import classes from './LoginPage.module.css';

export default function LoginPage(){
    return(
            <div>
              <div className={classes.heading}>
              <h2>Login Here</h2>
              </div>
              <LoginForm/>
            </div>
    )
}

export async function action({request}){
    const data = await request.formData();
    const requestedUser = {
        email : data.get('email'),
        password : data.get('password'),
    }

    console.log('userData on Login form', requestedUser);

    const user = await authenticateUser({auth_user: requestedUser});

    // set currentUser
    dataStore.dispatch(userActions.setCurrentUser({user}));
    localStorage.setItem('currentUser', JSON.stringify(user));

    // set Token
    setLocalToken(user.token);
    return redirect('/user');
}

export function loader(){
    const token = getLocalStorageToken();
    if (token) {
        return redirect('/user')
    }
    return null
}