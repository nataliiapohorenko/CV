import JokeService from '../../services/JokeService';
import { useEffect, useState } from 'react';


const JokeExample = () => {
    const {error, process, setProcess, clearError, getJoke} = JokeService();
    const [setup, setSetup] = useState();
    const [punchline, setPunchline] = useState();

    const splitJoke = (joke) => {
        setSetup(joke.setup);
        setPunchline(joke.punchline);
    };
    
    useEffect(() => {
        updateJoke();
        
    } , []);

    const updateJoke = () => {
        if (error) clearError();
        getJoke().then(splitJoke)
        .then(()=> setProcess('confirmed'));
    }

    return(
        
        <div className='examples__joke'>
            <div className='title title_fz16 examples-title'> Joke API</div>
            <Joke setup={setup} punchline={punchline}/>
            <button disabled={process!=='confirmed'} 
                onClick={updateJoke} 
                className="button">
                <div className="inner">{process==='confirmed' ? 'new joke' : process} </div>
            </button>
        </div>
            
    )
}

const Joke = (data) => {
    const  {setup, punchline} = data;
    return(
        <>
            <div className='title_fz14 examples__joke-setup'><b>Setup:</b> {setup}</div>
            <div className='title_fz14 examples__joke-punchline'><b>Punchline:</b> <span>{punchline}</span> </div>
        </>
    )
}

export default JokeExample