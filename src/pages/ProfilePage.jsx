import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../store/user";

export default function ProfilePage(){
    const currentUser = useSelector(state=> state.user.currentUser);
    const dispatch = useDispatch();
    // const user = { email: 'dhaks@gmail.com', full_name: 'Murufdf SL', password: '123', role: 'user'}
    // useEffect(()=>{
    //     dispatch(userActions.setCurrentUser({user}))
    // },[])
    console.log(currentUser, 'current user in users profile')
    return (
        <>
            <h1> This is Profile Page!</h1>
            <h4>Welcome {currentUser.full_name}</h4>
        </>
    )
}