import React, {PureComponent} from 'react';
import {Grid, Table} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";

import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";


class About extends PureComponent {

    componentDidMount() {

        const {fetchCompanyInfo} = this.props;
        fetchCompanyInfo();
    }

    render() {
        return (
            <div>
                <Head title={"About"}/>
                <SubHeader title={"About"} description={"Travelience Inc."}/>
                <Grid className="text-center">
                    <div>

                        <div className="page-title">
                            <h2>Vision</h2>
                            <hr/>
                        </div>

                        <div className="page-content">
                            <h3>To have people become happy by going on a trip</h3>
                        </div>
                    </div>

                    <div>
                        <div className="page-title">
                            <h2>Mission</h2>
                            <hr/>
                        </div>

                        <div className="page-content">
                            <h3>Innovate a new travel style</h3>
                        </div>
                    </div>


                    <div>
                        <div className="page-title">
                            <h2>Company</h2>
                            <hr/>
                        </div>

                    </div>

                    <Table className="company-info-table" responsive>
                        <tbody>
                        <tr>
                            <td>Company Name</td>
                            <td>Travelience Inc.</td>
                        </tr>

                        <tr>
                            <td>Address</td>
                            <td>Maru-K Bldg 8F, 2-29-11 Asakusabashi, Taito-ku, Tokyo, Japan 111-0053</td>
                        </tr>

                        <tr>
                            <td>Phone</td>
                            <td>+81 3-6830-0896</td>
                        </tr>

                        <tr>
                            <td>Established</td>
                            <td>February 2013</td>
                        </tr>

                        <tr>
                            <td>CEO</td>
                            <td>Naoaki Hashimoto</td>
                        </tr>

                        <tr>
                            <td>Services</td>
                            <td><a>Planetyze</a>
                                <a>Planetyze</a>
                                <a>Planetyze</a></td>
                        </tr>

                        </tbody>
                    </Table>

                </Grid>

            </div>
        );
    }
}

function mapStateToProps({company}) {

    return {
        company,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchCompanyInfo: () => {
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
