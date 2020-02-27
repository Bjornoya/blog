export const API_ROOT = 'https://5e583c9911703300147ae9e1.mockapi.io';

export const httpGet = async endPoint => {
    try {
        const response = await fetch(`${API_ROOT}/${endPoint}`);
        console.log('RESPONSE', response)
        if (response.ok) {
            const json = await response.json();
            return json
        } else {
            throw new Error(response.status)
        }
    } catch (err) {
        console.warn('httpGet error', err)
    }
};

export const checkResponse = (res) => {
    console.log('RES' ,res)
    if (res.statusText === "OK") {
        return true
    } else {
        return false
    }
};