

/**
 * ==> function parseParams - return parameters of url .
 * @param {Object}  params contaiins parameters of url;
 * @returns {String} 
 */

 export const parseParams = (params) => {
    if (typeof params !== 'object') return '';

    const entries = Object.entries(params);
    let paramsString = entries.map(elt => elt[0] + '=' + elt[1]).join('&');

    return paramsString ? '?' + paramsString : '';
}

/**
 * 
 * @param {String} url - url of API Get all products
 * @param {String} parseParams - parameters of url products
 * @returns {Array of OBJECT} - return products according to parameters
 */

export const getProducts = async (url, parseParams) => {
    try {
        // Storing response
         let response = await fetch(url + parseParams);
         return await response.json();
        
    } catch (err) {
        console.error(err);
        // Handle errors here
    }

}



