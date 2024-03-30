import { Form } from "react-router-dom";
import Input from "./Input";

export default function LoginForm(){
    return(
        <Form method="post" >
          <h3>Login</h3>
            <Input type="email" name="email" label="Email:"/>
            <Input type="password" name="password" label="Password:"/>
            <button type="submit">Save And Continue</button>
        </Form>
    )
}