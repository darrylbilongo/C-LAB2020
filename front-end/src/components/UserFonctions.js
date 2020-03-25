import axios from 'axios';

export const register = newUser => {


    return axios   
        .post('http://localhost:8080/users/register', {
            first_name : newUser.first_name,
            last_name : newUser.last_name,
            email : newUser.email,
            password : newUser.password,
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('http://localhost:8080/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
            return res.data.token;
        })
        .catch(err => {
            console.log(err)
        })
}