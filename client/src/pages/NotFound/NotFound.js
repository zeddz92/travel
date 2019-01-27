import React from 'react';

import './style.css';
import Head from '../../components/Head';
import SubHeader from '../../components/SubHeader';

function NotFound() {
    return (
        <div>
            <Head title={"Not Found"}/>
            <SubHeader title={"Oops"} description={"404 Not Found"}/>
        </div>
    )
}

export default NotFound;