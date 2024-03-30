import { redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SignupForm from "../components/SignupForm";
import { uploadData } from "../util/http_requests";
import { cheapTokenCreator } from "../util/local_storage";

export default function SignupPage(){
    return(
        <PageLayout>
            <div>
              <h2>This is Signup Page</h2>
              <SignupForm/>
            </div>
        </PageLayout>
    )
}

export async function createUserAction({request}){
    const data = await request.formData();

    const userData = {
        email : data.get('email'),
        password : data.get('password'),
        confirm_password : data.get('confirm_password'),
        token: cheapTokenCreator(data.get('email')),
    }

    console.log('userData on submit signup form', userData);
    
    await uploadData({data: userData, filePath: 'users.json'});

    return redirect('/login');
}