import React from "react";
import PropTypes from 'prop-types';
import "./Characters.css";


const Characters = props => {

        return (
            <div className={"card"} onClick={props.fnc}>
                <img className={`img-container ${props.shakeIt}`} src={props.url} alt={props.id}/>
            </div>
        );

};

Characters.propTypes = {
    fnc: PropTypes.func,
    url: PropTypes.string,
    id: PropTypes.number
}

export default Characters;