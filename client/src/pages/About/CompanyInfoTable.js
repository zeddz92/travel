import React from 'react';
import {Table} from "react-bootstrap";
import PropTypes from "prop-types";
import i18next from 'i18next';

function CompanyInfoTable({data}) {
    return (
        <Table className="company-info-table" responsive>
            <tbody>
            <tr>
                <td>{i18next.t("companyName")}</td>
                <td>{data.name}</td>
            </tr>

            <tr>
                <td>{i18next.t("address")}</td>
                <td>{data.address}</td>
            </tr>

            <tr>
                <td>{i18next.t("phone")}</td>
                <td>{data.phone}</td>
            </tr>

            <tr>
                <td>{i18next.t("established")}</td>
                <td>{data.establishedDate}</td>
            </tr>

            <tr>
                <td>{i18next.t("established")}</td>
                <td>{data.ceo}</td>
            </tr>

            <tr>
                <td>{i18next.t("services")}</td>
                <td style={{display: 'grid'}}>
                    {data.services.map((service, index) => (
                        <a key={index} className="clickable">{service.name}</a>
                    ))}
                </td>
            </tr>

            </tbody>
        </Table>
    )
}

CompanyInfoTable.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CompanyInfoTable