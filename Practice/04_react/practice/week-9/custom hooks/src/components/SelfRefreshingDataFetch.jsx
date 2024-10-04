/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetcher = (n) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        // Set up the interval and capture its ID
        const intervalId = setInterval(fetchData, n * 1000);

        // Initial fetch to avoid waiting for n seconds on page load
        fetchData();

        // Cleanup: clear the interval when the component unmounts or n changes
        return () => {
            clearInterval(intervalId);
        };
    }, [n]); // Effect depends on n

    return { data, loading };
};

const SelfRefreshingDataFetch = () => {
    const { data, loading } = Fetcher(5); // Call Fetcher with 5 seconds interval

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map((dt) => (
                <Todo key={dt.id} todo={dt} />
            ))}
        </div>
    );
};

const Todo = ({ todo }) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
    );
};

export default SelfRefreshingDataFetch;
