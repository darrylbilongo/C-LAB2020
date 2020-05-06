import axios from 'axios'

import { login } from '../components/UserFonctions'

const user = {
    email: 'darrylbilongo@gmail.com',
    password: 'secret'
}

jest.mock('axios');

describe('login', () => {

    it('logs in user successfully using the API', async () => {

        const data = {
            data : {

            }
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(login(user)).resolves.toEqual(data);
    });
   
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
 
        axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
        );
        await expect(login('react')).rejects.toThrow(errorMessage);
    });

})