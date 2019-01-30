import React from 'react';
import PropTypes from "prop-types";

function JobCard({data}) {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <hr className="divider"/>
        </div>
    );
}

JobCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default JobCard;