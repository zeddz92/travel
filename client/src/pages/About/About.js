import React, {PureComponent} from 'react';
import {Grid} from "react-bootstrap";
import {connect} from "react-redux";
import i18next from 'i18next';

import './style.css';
import Head from "../../components/Head";
import PageHead from "../../components/PageHead";
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

        // When language change, since data is persisted, user will see when the language change.
        // This is to prevent that
        if (company.isFetching) {
            return null;
        }

        return (
            <div data-test="component-about">
                <Head title={i18next.t("about")}/>
                <PageHead title={i18next.t("about")} description={info.name}/>
                <Grid className="text-center">
                    <div>

                        <div className="page-title">
                            <h2 data-test="vision-title">{i18next.t("vision")}</h2>
                            <hr/>
                        </div>

                        <div className="page-content">
                            <h3>{info.vision}</h3>
                        </div>
                    </div>

                    <div>
                        <div className="page-title">
                            <h2 data-test="mission-title">{i18next.t("mission")}</h2>
                            <hr/>
                        </div>

                        <div className="page-content">
                            <h3>{info.mission}</h3>
                        </div>
                    </div>


                    <div>
                        <div className="page-title">
                            <h2 data-test="company-title">{i18next.t("company")}</h2>
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
