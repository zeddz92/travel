import React, {PureComponent} from 'react';
import {Grid, Row} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import {toast, ToastContainer} from 'react-toastify';

import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import StaffCard from "./StaffCard";
import Loader from "../../components/Loader";
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
                <Head title="Staff"/>
                <SubHeader title={"Staff"}/>

                <Grid>
                    {staff.isFetching ?
                        (
                            <Loader/>
                        ) :
                        (
                            <Row>
                                <ToastContainer/>
                                {staff.items.map((member, index) => (
                                    <StaffCard key={index} data={member}/>
                                ))}
                            </Row>
                        )
                    }
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

