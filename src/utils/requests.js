import Config from 'src/config/config.json';

export const makeRequest = (url, method, headers, body, data) => {

  return new Promise(function(resolve, reject) {
    const timeoutId = setTimeout(() => {
      reject(new Error(Config.TIMEOUT_MESSAGE))
    }, Config.TIMEOUT_THRESHOLD);
    fetch(url, {
      method: method,
      headers: headers,
      body: body,
      data: data,
    }).then((response) => {
      console.warn(response)
      console.warn('before timeout clear')

      clearTimeout(timeoutId);
      console.warn(response.status)
      if (response.status === 200 || response.status === 201) {
        console.warn("inside if")
        console.warn('jsonin')
        //
        // const jsonResponse = response.json();
        // console.warn(jsonResponse)
        resolve(response.json());
      } else {
        reject(new Error);
      }
    }).catch((error) => {
      console.warn("errorrrorr")
      clearTimeout(timeoutId);
      reject(error);
    });
  });
}
