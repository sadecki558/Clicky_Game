import React from "react";
import PropTypes from 'prop-types';



class TopScore extends React.Component {

    render() {

        return (
            <span> {this.props.topScore} </span>
        );
    }
};

TopScore.propTypes = {
    topScore: PropTypes.number
}


export default TopScore;