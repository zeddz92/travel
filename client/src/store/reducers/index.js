import {combineReducers} from 'redux';
import {company} from './company';
import {services} from './services';
import {staff} from './staff';
import {jobs} from './jobs';
import {contact} from './contact';
import {categories} from './categories';
import {posts} from './posts';
import {lastAction} from './lastAction';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    company,
    services,
    staff,
    jobs,
    contact,
    categories,
    posts,
    form: formReducer,
    lastAction
});