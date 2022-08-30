import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-app-f2dd7-default-rtdb.asia-southeast1.firebasedatabase.app/'
});


export default instance;