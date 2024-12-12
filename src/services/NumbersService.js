import { useHttp } from "../hooks/http.hook";

const NumbersService = () => {

    const { request} = useHttp();
    
    const getFact = async (number, type) => {
        const res = await request(`http://numbersapi.com/${number}/${type}`);
        const data = await res.text();
        return data;
    }


    return { getFact}
}

export default NumbersService