import {combineReducers} from 'redux';
import {company} from './company';
import {news} from './news';
import {services} from './services';
import {staff} from './staff';
import {jobs} from './jobs';

export default combineReducers({
    company,
    news,
    services,
    staff,
    jobs
});