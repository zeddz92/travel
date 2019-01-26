import {combineReducers} from 'redux';
import {company} from './company';
import {posts} from './posts';
import {services} from './services';
import {staff} from './staff';
import {jobs} from './jobs';
import {contact} from './contact';
import {categories} from './categories';

import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    company,
    posts,
    services,
    staff,
    jobs,
    contact,
    categories,
    form: formReducer
});