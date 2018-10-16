import React from "react";
import PropTypes from 'prop-types';



class Score extends React.Component {

    render() {

        return (
            <span> {this.props.score} </span>
        );
    }
};

Score.propTypes = {
    score: PropTypes.number
}


export default Score;