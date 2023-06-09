import axios from 'axios';

export async function getToken(email: string, password: string) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          email,
          password
        });
        if (response.status === 200) {
            return response.data.token;
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}
    