import fetch from 'isomorphic-fetch'

// const API_ROOT = 'http://speadmin.nexus.net/';
const API_ROOT = 'http://localhost:5000/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (type, url, params, token='') => {
    const URL = API_ROOT + url;
    const headers = new Headers();
    headers.append('Content-type', 'application:/x-www-form-urlencoded:charset=UTF-8');
    headers.append('Accept', 'application/json');
    headers.append('X-NXG-Token', token);

    if (type == 'GET') {
        return get(URL, params, headers)
    } else {
        return post(URL, params, headers)
    }
};

const get = (url, params, headers) =>{
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        if(paramsArray.length > 0) {
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            // credentials:'include'
        })
            .then((response) => {
                console.log(response)
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
};

const post = (url, formData, headers) => {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            // credentials:'include',
            body:formData
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
};

export default callApi
