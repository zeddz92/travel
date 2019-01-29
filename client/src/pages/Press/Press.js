import React, {PureComponent} from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import connect from "react-redux/es/connect/connect";
import i18next from 'i18next';

import './style.css';
import Head from '../../components/Head';
import PageHead from '../../components/PageHead';
import CategoryList from './CategoryList';
import Feed from "./Feed";
import NotFound from "../NotFound";

import {fetchCategoriesIfNeeded} from "../../store/actions/category";
import {fetchPostBy} from "../../store/actions/post";

class Press extends PureComponent {

    componentDidMount() {

        const {fetchPosts, fetchCategories} = this.props;

        const {categoryPath} = this.props.match.params;

        fetchCategories();
        fetchPosts(categoryPath, 1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {posts} = this.props;
        if (posts.error && !posts.isFetching) {
            toast.error(posts.error.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }


    render() {
        const {categories, posts, fetchPosts, currentCategory} = this.props;
        const title = currentCategory ? currentCategory.name : i18next.t('press');
        const {categoryPath} = this.props.match.params;

        // Dont render till everything has been fetched
        if (categories.isFetching || posts.isFetching) {
            return null;
        }

        // If api returns 404 it means that the category don't exist
        // then show NotFound component instead
        if(posts.error && posts.error.code === 404) {
           return <NotFound/>;
        }

        return (
            <div>
                <Head title={title}/>
                <PageHead title={title}/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={2}>
                            <CategoryList currentPath={categoryPath} isFetching={categories.isFetching}
                                          items={categories.items}/>
                        </Col>
                        <Col md={10}>
                            <Feed categoryPath={categoryPath} fetchPosts={fetchPosts} data={posts}/>
                        </Col>
                    </Row>
                </Grid>
                <ToastContainer/>

            </div>
        );
    }
}

function mapStateToProps({posts, categories}, ownProps) {

    const {categoryPath} = ownProps.match.params;

    return {
        currentCategory: categories.items.find(category => category.path === categoryPath),
        posts,
        categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategoriesIfNeeded()),
        fetchPosts: (category, page) => dispatch(fetchPostBy(category, page)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Press);