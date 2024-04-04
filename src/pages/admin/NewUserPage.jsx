import UserForm from "../../components/UserForm";

export default function NewUserPage(){
    return(
        <div style={{width:'80rem'}}>
            <UserForm method='post'/>
        </div>
    )
}