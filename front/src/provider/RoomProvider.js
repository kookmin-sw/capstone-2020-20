import React, { useState } from 'react';
import RoomContext from '../context/RoomContext';

const RoomProvider = ({children}) => {
    const [myroomInfo, setMyroomInfo] = useState({}); 


    const option = {
        myroomInfo, setMyroomInfo
    }

    return (
        <RoomContext.Provider value={option}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider;