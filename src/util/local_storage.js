
export function setLocalToken(token){
    localStorage.setItem('token', token);
    return token;
}

export function cheapTokenCreator(str){
    const cheapToken = str.substring(2,5) + "-cheapToken" + str.substring(0,4);
    return cheapToken;
}

export function getLocalStorageToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader(){
    return getLocalStorageToken();
}
