import React from "react";
import './Friends.scss';
import OneFriend from "./OneFriend/OneFriend";



const Friends = (props) => {

    let friendsCreate = props.friends.map( f => {
        return (
            <OneFriend name={f.name}  />
        )
    });

    return (
        <div>
            {friendsCreate}
        </div>
    )
}

export default Friends;
