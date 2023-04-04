import { useState, useEffect } from "react";
import axios from "axios";




const useFetch=(endpoint, query)=>{
            const [data, setData] = useState([]);
            const [isLoading, setIsLoading] = useState(false);
            const [error, setError] = useState(null);

            
        const options = {
        method: 'GET',
        url:  `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'f2fdd24909msh03999eca7d783f7p190dfejsn13b394b6a74d',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
        }
        const fetchData = async () => {
            setIsLoading(true);
            
            try {
                const response= await axios.request(options)
                setData(response.data.data)
                setIsLoading(false)
            } catch (error) {   
                setError(error)
                alert("There is an error")
            } finally{ 
                setIsLoading(false)
            }
        }
        useEffect(()=>{
            fetchData()
        },[])

        const reFresh=()=>{
            setIsLoading(true)
            fetchData()
        }
    return {data, isLoading, error, reFresh}
}

export default useFetch;



