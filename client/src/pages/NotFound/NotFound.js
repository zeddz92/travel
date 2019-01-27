import React from 'react';
import i18next from 'i18next';

import './style.css';
import Head from '../../components/Head';
import SubHeader from '../../components/SubHeader';

function NotFound() {
    return (
        <div>
            <Head title={i18next.t("pageNotFound")}/>
            <SubHeader title={i18next.t("oops")} description={i18next.t("codeNotFound")}/>
        </div>
    )
}

export default NotFound;