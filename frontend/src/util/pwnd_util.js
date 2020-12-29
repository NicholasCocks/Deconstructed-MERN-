import axios from 'axios';

const hibpAPIKey = process.env.REACT_APP_HIBP_API_KEY
// GET https://haveibeenpwned.com/api/v3/breachedaccount/{account}
// hibp-api-key: [your key]

export const fetchBreaches = email => {
    debugger
    return axios.request({
        url: `https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`,
        method: 'get',
        headers: {
            'hibp-api-key': hibpAPIKey,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Authorization'
        },
        withCredentials: true,
    })
}

// export const fetchBreaches = email => {
//     const myHeader = new Headers();
//     myHeader.append('Access-Control-Allow-Origin', '*');
//     myHeader.append('Access-Control-Allow-Methods', 'GET');
//     myHeader.append('Access-Control-Allow-Headers', 'Authorization');
//     myHeader.append('hibp-api-key', hibpAPIKey);
//     debugger
//     return fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: myHeader
//     })
// }