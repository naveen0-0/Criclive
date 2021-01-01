import React,{ useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const PlayerSearch = () => {
    const [ players, setPlayers ] = useState([])

    const url = 'https://cricapi.com/api/playerFinder?apikey=RPXkZu6CKxTSZhhbWNOo9DdleJv2&name=virat';

    useEffect(()=>{
        let source = Axios.CancelToken.source();

        const loadingIntialPlayers = async () => {
            try{
                const response = await Axios.get(url,{
                    cancelToken : source.token
                })
               setPlayers(response.data.data)
            }catch(error){
                if(Axios.isCancel(error)){
                    console.log("Caught Cancel");
                }else{
                    throw error;
                }
            }
        }
        loadingIntialPlayers();
        return () => {
            source.cancel();
        }
    },[])

    
    return (
        <Fragment>
            <form className="playersearchform">
                <input type="search" className="playersearchinput" placeholder="Enter a player's name"/>
                <input type="submit" value="Search" className="playersearchsubmit"/>
            </form>

            <div className="players">
                {players.map(player=>(
                    <Link className="player" key={player.pid} to={`/player/${player.pid}`}>
                        <div className="name">{player.fullName}</div>
                        <div className="pid">{player.pid}</div>
                    </Link>
                ))}
            </div>
        </Fragment>
    )
}

export default PlayerSearch;
