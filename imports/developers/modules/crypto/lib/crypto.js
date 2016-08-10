import CryptoJS from "crypto-js";
export var KEY_SIZE = 256,
    KEY_ITERATIONS = 10;
export default () => {
    var context = this;
    context = {
        encrypt: (value, key) => {
            if (value && key)
                return CryptoJS.AES.encrypt(value, key);
        },
        decrypt: (value, key) => {
            if (value && key)
                return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
        },
        initKey: (password, salt) => {
            if (password && salt)
                return CryptoJS.PBKDF2(password, salt, {keySize: KEY_SIZE / 32, iterations: KEY_ITERATIONS}).toString();
        }
    };
    return context;
};
