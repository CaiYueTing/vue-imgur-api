import qs from 'qs'
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