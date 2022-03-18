import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setError(null);
        setIsPending(true);

        // sign in
        try {
            const res = await axios.post("https://demo.credy.in/api/v1/usermodule/login/", {username, password});

            console.log(res);
            if(res.data.is_success) {
                localStorage.setItem("authToken", res.data.data.token);
            }
            
            dispatch({type: 'LOGIN', payload: res.data.data.token});

            // update state
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };
    // cleanup function
    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { login, error, isPending };
};