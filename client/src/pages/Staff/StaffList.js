import React from 'react';
import Loader from "../../components/Loader";
import {Row} from "react-bootstrap";
import StaffCard from "./StaffCard";
import PropTypes from "prop-types";

function StaffList({data}) {
    if (data.isFetching) {
        return <Loader/>;
    }
    return (
        <div>
            <Row>
                {data.items.map((member, index) => (
                    <StaffCard key={index} data={member}/>
                ))}
            </Row>
        </div>
    )
}

StaffList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default StaffList;