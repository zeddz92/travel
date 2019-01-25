import React, {PureComponent} from 'react';
import {Col, Grid, Row, Panel, PageHeader} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";


import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import StaffCard from "./StaffCard";

const demoStaff = [
    {
        name: "Naoki",
        position: "CEO - Japan",
        video_url: "https://player.vimeo.com/video/299845634?app_id=122963"
    },
    {
        name: "Rodrigo",
        position: "CTO - Argentina",
        video_url: "https://player.vimeo.com/video/299847477?app_id=122963"
    },
    {
        name: "Risa",
        position: "Guide/Customer Suport Team - Japan",
        video_url: "https://player.vimeo.com/video/299845651?app_id=122963"
    },
    {
        name: "Emi",
        position: "Guide Support - Japan",
        video_url: "https://player.vimeo.com/video/299845544?app_id=122963"
    }
];

class Staff extends PureComponent {

    componentDidMount() {

        const {fetchStaff} = this.props;
        fetchStaff();
    }



    render() {
        return (
            <div>
                <Head title="Staff"/>
                <SubHeader title={"Staff"}/>
                <Grid>
                    <Row>
                        {demoStaff.map(member => (
                            <StaffCard data={member}/>
                        ))}
                    </Row>
                </Grid>
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
        fetchStaff: () => {
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff);

