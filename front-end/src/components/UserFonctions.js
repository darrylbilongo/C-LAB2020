import axios from 'axios';

export const register = async newUser => {

    try {
        return axios
            .post('http://localhost:8080/users/register', {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role
            });
    }
    catch (err) {
        console.log(err);
    }
}


export const link = async newUser => {

    try {
        return axios
            .post('http://localhost:8080/links/compte', {
                contenu: newUser.contenu,
                categorie: newUser.categorie,
                UserId: newUser
            });
    }
    catch (err) {
        console.log(err);
    }
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

export const update = async newUser => {

    try {
        return axios
            .put('http://localhost:8080/users/:id', {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role
            });
    }
    catch (err) {
        console.log(err);
    }
}

export const updateLink = async newLink => {

    try {
        return axios
            .put('http://localhost:8080/links/:id', {
                lienInsta: newLink.first_name,
                lienYoutube: newLink.last_name,
                lienAutre: newLink.email,
            });
    }
    catch (err) {
        console.log(err);
    }
}



export const avis = async newUser => {

    try {
        return axios
            .post('http://localhost:8080/users/avis/', {
                auteurName: newUser.auteurName,
                contenu: newUser.contenu,
                artisteId: newUser.artisteId,
            });
    }
    catch (err) {
        console.log(err);
    }
}