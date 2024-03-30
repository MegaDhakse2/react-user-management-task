export default function Input({type, name, label}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name}/>
        </div>
    )
}