import { Form } from "react-router-dom";
import Input from "./Input";

export default function SignupForm(){
    return(
        <Form method="post" >
          <h3>Signup here</h3>
            <Input type="text" name="full_name" label="Full Name:"/>
            <Input type="email" name="email" label="Email:"/>
            <Input type="password" name="password" label="Password:"/>
            <Input type="password" name="confirm_password" label="Confirm Password:"/>
            <button type="submit">Save And Continue</button>
        </Form>
    )
}