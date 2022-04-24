import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import axios from "./api/axios";

const User = () => {
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();
    // const navigate = useNavigate();
    // const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get('/auth/customers/me/', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUser(response.data);
            } catch (err) {
                console.error(err);
                // navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>User Profile</h2>
            <li>{user?.id}</li>
            <li>{user?.brand_name}</li>
            <li>{user?.business_category}</li>
            <li>{user?.phone}</li>
            <li>{user?.website_url}</li>
            <li>{user?.address}</li>

            {/*{users?.length*/}
            {/*    ? (*/}
            {/*        <ul>*/}
            {/*            {users.map((user, i) => <li key={i}>{user?.username}</li>)}*/}
            {/*        </ul>*/}
            {/*    ) : <p>No users to display</p>*/}
            {/*}*/}
        </article>
    );
};

export default User;