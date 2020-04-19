import React from 'react'
import { Link } from "react-router-dom";
import '../css.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlusCard = () => {

    return (
        <Link to="/makeroom" >
            <div className="plus_card">
                <FontAwesomeIcon icon="plus" size="5x" />
            </div>
        </Link>
    )
}

export default PlusCard; 