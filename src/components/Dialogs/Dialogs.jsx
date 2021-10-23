import React from "react";
import { NavLink } from "react-router-dom";
import './Dialogs.scss';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/state";

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

const Dialogs = (props) => {
    let state = props.store.getState();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) =>{
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    let messageCreate = props.messages.map(m => <Message message={m.message} />)

    let dialogCreate = props.dialogsss.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id} />
        )
    })
    let newmessageBody = state.newmessageBody;
    
   //40 react ITKS
    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogCreate}
            </div>
            <div className="dialogs__messages">
                {messageCreate}
                <textarea onChange ={onNewMessageChange}
                          value= {newmessageBody} 
                          placeholder= "Enter your message" ></textarea>
                <br />
                <button onClick= {onSendMessageClick} >Add message</button>
            </div>
        </div>

    )
}

export default Dialogs;