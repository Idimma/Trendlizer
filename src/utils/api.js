const SERVER = 'https://058e2f2b.ngrok.io';

const API = SERVER + "/api/";

export const REGISTER = API + "register";

export const IMAGE_URL = API + "image";

export const LOGIN = API + "login";



export const POST_REQUEST_TYPE = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
