// GET https://haveibeenpwned.com/api/v3/breachedaccount/{account}
// hibp-api-key: [your key]

export const fetchBreaches = (email) => {
    return axios.get('https://haveibeenpwned.com/api/v3/breachedaccount/{account}');
}