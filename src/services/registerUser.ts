import axios from 'axios';

export async function registerUser(username: string, password: string, email: string) {
    try {
        const response = await axios.post('https://api.thiago-dorville.tech/register', {
            username,
            email,
            password
        });
        if (response.status === 201) {
            return response.data.token;
        }
        return false;

    } catch (error) { 
        console.log(error)
    }
}