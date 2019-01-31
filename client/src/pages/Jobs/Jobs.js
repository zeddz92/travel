import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Grid} from "react-bootstrap";
import i18next from 'i18next';
import {toast, ToastContainer} from "react-toastify";

import './style.css';
import Head from "../../components/Head";
import PageHead from "../../components/PageHead";
import JobCard from './JobCard';
import {fetchJobs} from "../../store/actions/job";

class Jobs extends PureComponent {

    componentDidMount() {
        const {fetchJobs} = this.props;
        fetchJobs();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {jobs} = this.props;
        if (jobs.error && !jobs.isFetching) {
            toast.error(jobs.error.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }


    render() {

        const {jobs} = this.props;
        const items = jobs.items;

        if (jobs.isFetching) {
            return null;
        }
        return (
            <div>
                <Head title={i18next.t("jobs")}/>
                <PageHead title={i18next.t("jobs")}/>

                <Grid>
                    <h1><strong>{i18next.t("jobOpenings")}</strong></h1>
                    <p>{i18next.t("submitResume")} <a href="mailto:jobs@travelience.com">jobs@travelience.com</a></p>

                    <ul>
                        {items.map((job, index) => (
                            <li key={index}>{job.title}</li>
                        ))}
                    </ul>
                    <hr className="divider"/>

                    <div className="job-post">
                        {items.map((job, index) => (
                            <JobCard key={index} data={job}/>
                        ))}
                    </div>
                </Grid>
                <ToastContainer/>
            </div>
        );
    }
}

function mapStateToProps({jobs}) {
    return {
        jobs,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);