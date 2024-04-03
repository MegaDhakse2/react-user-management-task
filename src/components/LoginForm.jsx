import { Form } from "react-router-dom";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

export default function LoginForm(){
    const dispatch = useDispatch();

    function handleSubmit(){
        dispatch(authActions.onLogin());
    }

    return(
        <Form method="post" onSubmit={handleSubmit}>
          <h3>Login</h3>
            <Input type="email" name="email" label="Email:"/>
            <Input type="password" name="password" label="Password:"/>
            <button type="submit">Save And Continue</button>
        </Form>
    )
}