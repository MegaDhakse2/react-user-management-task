import classes from './Input.module.css';

export default function Input({type, name, label, defaultValue, ...props}){
    return(
        <div>
            <label 
                htmlFor={name}
                className={classes.label}
            >
                {label}
            </label>

            <input 
                type={type} 
                name={name} 
                defaultValue={defaultValue ? defaultValue : ''}
                className={classes.input}
                {...props}
            />
        </div>
    )
}