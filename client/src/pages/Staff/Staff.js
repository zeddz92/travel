import React, {PureComponent} from 'react';
import {Grid} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import i18next from 'i18next';
import {toast, ToastContainer} from 'react-toastify';

import './style.css';
import Head from "../../components/Head";
import PageHead from "../../components/PageHead";
import StaffList from "./StaffList";
import {fetchStaffIfNeeded} from "../../store/actions/staff";

class Staff extends PureComponent {

    componentDidMount() {

        const {fetchStaff} = this.props;
        fetchStaff();
    }

    componentDidUpdate(prevProps, prevState, snapshot){

        const {staff} = this.props;
        if(staff.error && !staff.isFetching) {
            toast.error(staff.error.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    render() {

        const {staff} = this.props;
        return (
            <div>
                <Head title={i18next.t("staff")}/>
                <PageHead title={i18next.t("staff")}/>

                <Grid>
                    <StaffList data={staff}/>
                </Grid>
                <ToastContainer/>

            </div>
        )
    }
}

function mapStateToProps({staff}) {

    return {
        staff,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStaff: () => dispatch(fetchStaffIfNeeded()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff);

