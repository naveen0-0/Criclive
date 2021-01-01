import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';


const Player = ({ match }) => {

    const [ player, setPlayer ] = useState({});
    let url = `https://cricapi.com/api/playerStats?apikey=RPXkZu6CKxTSZhhbWNOo9DdleJv2&pid=${match.params.id}`;

    useEffect(()=>{
        let source = Axios.CancelToken.source();

        const loadingPlayer = async () => {
            try{
                const response = await Axios.get(url,{
                    cancelToken : source.token
                })
               setPlayer(response.data)
               console.log(response.data)
            }catch(error){
                if(Axios.isCancel(error)){
                    console.log("Caught Cancel");
                }else{
                    throw error;
                }
            }
        }
        loadingPlayer();
        return () => {
            source.cancel();
        }
    },[match.params.id,url])

    return (
        <Fragment>
            Player
        </Fragment>
    )
}

export default Player;
