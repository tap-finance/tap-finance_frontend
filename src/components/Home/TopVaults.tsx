
import { useCallback } from "react";
import {useNavigate} from 'react-router-dom';

import AllTopVaults from "../TopVaults/AllTopVaults";

const TopVaults = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/top', {replace: true}), [navigate]);

    return (
        <div>

            <AllTopVaults />

            <button onClick={handleOnClick} className="btn btn-outline btn-info rounded">View More</button>

            <div className="divider"></div>

        </div>


    );
}



export default TopVaults;