import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import Input from "./UI/Input";
import classes from './LoginForm.module.css';
import userFormClasses from './UserForm.module.css';

export default function LoginForm(){
    const dispatch = useDispatch();

    function handleSubmit(){
        dispatch(authActions.onLogin());    
    }

    return(
        <Form method="post" onSubmit={handleSubmit} className={classes.form}>
          <h3>Type Credentials Carefully.</h3>
            <Input 
                type="email" 
                name="email" 
                label="Email:"
                required
            />
            <Input 
                type="password" 
                name="password" 
                label="Password:"
                required
                minLength={8}
            />
            <div className={userFormClasses.actions}>
                <button type="reset">Cancel</button>
                <button type="submit">Login</button>
            </div>
        </Form>
    )
}