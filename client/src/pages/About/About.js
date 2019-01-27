import React, {PureComponent} from 'react';
import {Grid} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";

import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import CompanyInfoTable from "./CompanyInfoTable";

import {fetchCompanyIfNeeded} from "../../store/actions/company";


class About extends PureComponent {

    componentDidMount() {


        const {fetchCompanyInfo} = this.props;
        fetchCompanyInfo();
    }

    render() {
        const {company} = this.props;

        const info = company.data;

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
                            <h3>{info.vision}</h3>
                        </div>
                    </div>

                    <div>
                        <div className="page-title">
                            <h2>Mission</h2>
                            <hr/>
                        </div>

                        <div className="page-content">
                            <h3>{info.mission}</h3>
                        </div>
                    </div>


                    <div>
                        <div className="page-title">
                            <h2>Company</h2>
                            <hr/>
                        </div>

                    </div>

                    <CompanyInfoTable data={info}/>

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
        fetchCompanyInfo: () => dispatch(fetchCompanyIfNeeded()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
