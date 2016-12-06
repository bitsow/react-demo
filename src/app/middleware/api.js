import fetch from 'isomorphic-fetch'

// const API_ROOT = 'http://speadmin.nexus.net/';
const API_ROOT = 'http://localhost:5000/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (type, url,params) => {
    const URL = API_ROOT + url;
    var option = {
        headers: {
            'Accept': 'application/json',
            "Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
        },
        mode: 'no-cors',
        method: 'POST',
        // credentials:'include',
    };

    if (type == 'GET') {
        option.method = 'GET'
    }else{
        option.body = JSON.stringify( params );
        option.method = 'POST'
    }

    return fetch(
        // '//offline-news-api.herokuapp.com/stories',
        URL,
        option
    )
};

export default callApi
