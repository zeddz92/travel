import React from 'react';
import {Table} from "react-bootstrap";
import PropTypes from "prop-types";

function CompanyInfoTable({data}) {
    return (
        <Table className="company-info-table" responsive>
            <tbody>
            <tr>
                <td>Company Name</td>
                <td>{data.name}</td>
            </tr>

            <tr>
                <td>Address</td>
                <td>{data.address}</td>
            </tr>

            <tr>
                <td>Phone</td>
                <td>{data.phone}</td>
            </tr>

            <tr>
                <td>Established</td>
                <td>{data.establishedDate}</td>
            </tr>

            <tr>
                <td>CEO</td>
                <td>{data.ceo}</td>
            </tr>

            <tr>
                <td>Services</td>
                <td style={{display: 'grid'}}>
                    {data.services.map( (service, index) => (
                        <a key={index} className="clickable">{service.name}</a>
                    ))}</td>
            </tr>

            </tbody>
        </Table>
    )
}

CompanyInfoTable.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CompanyInfoTable