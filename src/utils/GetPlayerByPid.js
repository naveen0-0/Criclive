import axios from 'axios';


export const GetPlayerByPid = async (pid) => {
    let response = await axios.get(`https://cricapi.com/api/playerStats?apikey=RPXkZu6CKxTSZhhbWNOo9DdleJv2&pid=${pid}`);
    return response;
}