import qs from 'qs'
import axios from 'axios'
import { clintId } from './imgurApi'



const Root_url = 'https://api.imgur.com'
// /oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE


export default {
    login(){
        const querystring = {
            client_id: clintId,
            response_type: 'token'
        };

        window.location = `${Root_url}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${Root_url}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token) {
        const promise = Array.from(images).map(image => {
            const formData = new FormData()
            formData.append('image', image)


            return axios.post(`${Root_url}/3/images`, formData, {
                headers:{
                    // "Access-Control-Allow-Origin" : "*",
                    // "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                    // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    Authorization: `Bearer ${token}`
                }
            })
        })

        return Promise.all(promise)
    }
}

/* 
http://localhost:8080/oauth2/callback#
access_token=cd90e1b9ef74e648c211924506cc81d6621c2f86
&expires_in=315360000
&token_type=bearer
&refresh_token=a69ddaaef1185f855b82f621d36e7b0b0696e82f
&account_username=YueTingTasi
&account_id=90875885
*/