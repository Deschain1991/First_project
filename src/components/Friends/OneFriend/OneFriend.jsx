import React from "react";
import './OneFriend.scss';

const OneFriend = (props) => {
    return (
        <div className='OneFriend__page'>
            <div className="OneFriend__item">
                {props.name}
            </div>
        </div>
    )
}

export default OneFriend;
