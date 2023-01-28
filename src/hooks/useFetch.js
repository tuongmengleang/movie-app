import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (method, url, body) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios({
                    method: method,
                    url: 'https://api.themoviedb.org' + url,
                    data: body,
                })
                const data = await resp?.data;

                setData(data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { isLoading, data, error }
}

export default useFetch;