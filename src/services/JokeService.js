import { useHttp } from "../hooks/http.hook";

const JokeService = () => {

    const { request, clearError, process, setProcess} = useHttp();
    
    const getJoke = async () => {
        const res = await request('https://official-joke-api.appspot.com/jokes/programming/random');
        const data = await res.json();
        if (typeof data !== 'object' || Object.keys(data).length === 0) {
            throw new Error(`Wrong url, no info inside`);
        }
        return data[0]
    }

    return { process, setProcess, clearError, getJoke}
}

export default JokeService