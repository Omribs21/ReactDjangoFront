import axios from 'axios'

const URL = "https://back-testing3.onrender.com/logout/";

export function myLogout(token) {
    return new Promise((resolve) =>
    axios(URL, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }}).then((res) => resolve({ data: res.data }))
    );
}