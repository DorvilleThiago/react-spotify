import axios from 'axios';

export async function getUserData() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/user', {
            headers: {
                Authorization: ''+localStorage.getItem('token')
              }
        });
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}
    