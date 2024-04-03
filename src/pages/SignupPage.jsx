import { redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import UserForm from "../components/UserForm";
import { uploadData } from "../util/http_requests";
import { cheapTokenCreator, getLocalStorageToken } from "../util/local_storage";

export default function SignupPage(){
    return(
        <PageLayout>
            <div>
              <h2>This is Signup Page</h2>
              <UserForm method='post'/>
            </div>
        </PageLayout>
    )
}


export function loader(){
    const token = getLocalStorageToken();
    if (token) {
        return redirect('/user')
    }
    return null
}