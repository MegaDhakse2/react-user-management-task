import { redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { setLocalToken } from "../util/local_storage";
import { authenticateUser } from "../util/auth";
import LoginForm from "../components/LoginForm";
import ErrorElement from "./ErrorPage";

export default function LoginPage(){
    return(
        <PageLayout>
            <div>
              <h2>This is Login Page</h2>
              <LoginForm/>
            </div>
        </PageLayout>
    )
}

export async function authenticateUserAction({request}){
    const data = await request.formData();

    const requestedUser = {
        email : data.get('email'),
        password : data.get('password'),
    }
    console.log('userData on Login form', requestedUser);

    const user = await authenticateUser({auth_user: requestedUser});
    // set to state

    // set Token
    setLocalToken(user.token);
    // localStorage.setItem('token', user.token);

    return redirect('/dashboard');
}