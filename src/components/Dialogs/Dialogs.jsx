import React from "react";
import { NavLink } from "react-router-dom";
import './Dialogs.scss';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className="dialogs__dialog">
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (

        <div className="dialogs__message">{props.message}</div>
    )
}

let addMessageArea = React.createRef();

let addMessage = () =>{
    let text = addMessageArea.current.value;
    alert (text);
}

const Dialogs = (props) => {

    let messageCreate = props.messages
    .map(m => <Message message={m.message} />)

    let dialogCreate = props.dialogsss.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id} />
        )
    })
    

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogCreate}
            </div>
            <div className="dialogs__messages">
                {messageCreate}
                <textarea ref={addMessageArea} ></textarea>
                <br />
                <button onClick= {addMessage} >Add message</button>
            </div>
        </div>

    )
}

export default Dialogs;