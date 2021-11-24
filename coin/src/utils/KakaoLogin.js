import axios from "axios";
import {KEYS} from "./credentials";


const header = {
    'Authorization': KEYS.ADMIN_KEY,
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
}

const getKakaoToken = async(code) => {
    const data = {
        'grant_type': 'authorization_code',
        'client_id': KEYS.REST_API_KEY,
        'redirected_uri': 'http://localhost:8080/oauth',
        code: code,
    }
    const queryString = Object.keys(data)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');
    try {
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: header });
        return result;
    } catch (e) {
        console.error(e.message);
    }
}

export {
    getKakaoToken,
};
