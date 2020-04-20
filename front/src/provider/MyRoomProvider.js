import React, { useState } from 'react';
import MyRoomContext from '../context/MyRoomContext';

const MyRoomProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [myRoomInfo, setMyRoomInfo] = useState({});

    const option = {
        isLogged,
        setIsLogged
    }

    return (
        <MyRoomContext.Provider value={option}>
            {children}
        </MyRoomContext.Provider>
    )
}

export default MyRoomProvider;