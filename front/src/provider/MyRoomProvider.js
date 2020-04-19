import React, { useState } from 'react';
import MyRoomContext from '../context/MyRoomContext';

const MyRoomProvider = ({children}) => {
    const [myRoomInfo, setMyRoomInfo] = useState({});

    const option = {
        myRoomInfo,
        setMyRoomInfo,
    }

    return (
        <MyRoomContext.Provider value={option}>
            {children}
        </MyRoomContext.Provider>
    )
}

export default MyRoomProvider;