import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../css.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Plus_card = () => {

    return (
        <Link to="/makeroom" >
            <div className="plus_card">
                <FontAwesomeIcon icon="plus" size="5x" />
            </div>
        </Link>
    )
}

export default Plus_card; 