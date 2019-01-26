import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";


function Loader({type, color}) {
    return (
        <div className="justify-center">
            <ReactLoading type={type} color={color}/>
        </div>
    );
}

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
};

Loader.defaultProps = {
    type: "spinningBubbles",
    color: "red",
};


export default Loader;