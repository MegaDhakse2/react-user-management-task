import UserForm from "../components/UserForm";

export default function NewUserPage(){
    return(
        <>
            <h2>This is new User Page!</h2>
            <UserForm method='post'/>
        </>
    )
}