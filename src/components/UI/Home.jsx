import { NavLink } from "react-router-dom";
import classes from './Home.module.css';

export default function Home(){
    return(
         <div style={{textAlign:'center', margin:'11% auto'}}>
            <h1>Welcome Buddy!</h1>
            <p>Explore more, Learn more..</p>
            <NavLink 
                to='/signup'
                className={classes.getStarted}
            >
                Get Started
            </NavLink>
        </div>
    )
}