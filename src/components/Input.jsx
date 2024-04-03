export default function Input({type, name, label, defaultValue}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} defaultValue={defaultValue ? defaultValue : ''}/>
        </div>
    )
}