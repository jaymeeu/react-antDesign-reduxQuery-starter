
import React from 'react';
import CryptoJS from 'crypto-js'

const setLocalStorage = async (key, value) => {
    var ciphertext = CryptoJS.AES.encrypt(value, import.meta.env.VITE_LOCAL_STORAGE_KEY).toString();
    localStorage.setItem(key, ciphertext)
};


const getLocalStorage = async (key) => {
    const ciphertext = localStorage.getItem(key)
    if (ciphertext) {
        var bytes = CryptoJS.AES.decrypt(ciphertext, import.meta.env.VITE_LOCAL_STORAGE_KEY)
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        
        return JSON.parse(originalText)
    }
    else {
        return null
    }

};

const clearLocalStorage = async () => {
    localStorage.clear()
};

const MyComponent = () => {
    return (
        <></>
    );
};

export { setLocalStorage, getLocalStorage, clearLocalStorage };
export default MyComponent;
