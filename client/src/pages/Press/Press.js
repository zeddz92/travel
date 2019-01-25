import React, {PureComponent} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import Pagination from "react-js-pagination";
import connect from "react-redux/es/connect/connect";

import './style.css';
import Head from '../../components/Head';
import SubHeader from '../../components/SubHeader';
import PostCard from './PostCard';


const demoPosts = [
    {
        title: "Planetyze Hostel was featured in NHK world news",
        body: "Our newly opened Planetyze Hostel was featured on NHK world news on February 22nd. You can check the video with our CEO Hashimoto’s interview, from the link below. (The link might expire after a certain period) Dealing with Tokyo Hotel Shortage Our company is open to any inquiries, interviews, etc. on trends of foreign travelers […] ",
        date: "2017/02/23",
        categories: ["Media", "Travelience"]
    },
    {
        title: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        body: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        date: "2015/12/04",
        categories: ["Media", "Travelience"]
    },
];

const demoCategories = [
    "News", "Media", "Planetyze", "Planetyze Hostel", "TripleLights"
];


class Press extends PureComponent {

    componentDidMount() {

        const {fetchPosts} = this.props;
        fetchPosts();
    }

    render() {
        return (
            <div>
                <Head title={"Press"}/>
                <SubHeader title={"Press"}/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={2}>
                            <ListGroup>
                                {demoCategories.map(category => (
                                    <ListGroupItem href="#">{category}</ListGroupItem>
                                ))}
                            </ListGroup>

                        </Col>
                        <Col md={10}>
                            {demoPosts.map(post => (
                                <PostCard data={post}/>
                            ))}
                            <div className="text-center">
                                <Pagination
                                    activePage={1}
                                    itemsCountPerPage={10}
                                    totalItemsCount={20}
                                    pageRangeDisplayed={10}
                                    onChange={(page) => {
                                    }}
                                />
                            </div>

                        </Col>

                    </Row>

                </Grid>
            </div>
        );
    }
}

function mapStateToProps({posts}) {

    return {
        posts,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => {
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Press);