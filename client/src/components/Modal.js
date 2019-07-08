import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(event) => event.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    <h2>{props.title}</h2>
                </div>
                <div className="content">
                    <h3>{props.content}</h3>
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')   
    )
};
export default Modal;