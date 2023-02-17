import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    headers: {
                        "Content-type": "application/json",
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};

export default useFetch;
