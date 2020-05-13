import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const UserProvider = ({children}) => {
    const [User, setUser] = useState({});

    const option = {
        User,setUser
    }

    return (
        <UserContext.Provider value={option}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;