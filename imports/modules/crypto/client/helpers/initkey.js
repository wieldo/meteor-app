import CryptoJS from "crypto-js";
import {KEY_SIZE, KEY_ITERATIONS} from "./../../lib/module";
export default (password, salt) => {
    return CryptoJS.PBKDF2(password, salt, {keySize: KEY_SIZE / 32, iterations: KEY_ITERATIONS}).toString();
};
