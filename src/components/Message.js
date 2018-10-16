import React from "react";
import PropTypes from 'prop-types';
import "./Characters.css";


const Message = props => {

        return (
            <span className={props.msgType}>{props.msg}</span>
        );

};

Message.propTypes = {
    msg: PropTypes.string
}

export default Message;