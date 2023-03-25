import {TIMEOUT_SEC} from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


export const AJAX = async function(GetOrSend, url, uploadData = undefined) {
  try {
    let res;
    if (GetOrSend === 'send') {
      console.log('send',url);
      res = await Promise.race([fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData),        
      }),timeout(TIMEOUT_SEC)]);
    }
    if (GetOrSend === 'get') {
      console.log('get',url);
      res = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
    }
    console.log(res);
    const data = await res.json();
    // console.log(data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
} catch (err) {
    throw err;
}
};

export const getJSON = async function(url) {
  return AJAX('get', url);
};

export const sendJSON = async function(url, uploadData) {
  return AJAX('send', url, uploadData);
};