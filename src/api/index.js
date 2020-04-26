import axios from "axios";

/*export const auth = axios.get('http://localhost:3000/data.json').then(response => response)*/
export const auth = () => axios.get('http://localhost:3000/data.json')