import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from "react-loading";


function Loader({...rest}) {
    return (
        <div className="justify-center">
            <ReactLoading {...rest}/>
        </div>
    );
}

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.node,
};

Loader.defaultProps = {
    type: "spinningBubbles",
    color: "red",
};


export default Loader;