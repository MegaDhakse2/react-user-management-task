import { redirect } from "react-router-dom";
import { getLocalStorageToken } from "../util/local_storage";

export function loader(){
    const token = getLocalStorageToken();
    if (!token) {
      return redirect('/login')  
    }
    return null
}