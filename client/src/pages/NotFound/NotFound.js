import React from 'react';
import i18next from 'i18next';

import './style.css';
import Head from '../../components/Head';
import PageHead from '../../components/PageHead';

function NotFound() {
    return (
        <div>
            <Head title={i18next.t("pageNotFound")}/>
            <PageHead title={i18next.t("oops")} description={i18next.t("codeNotFound")}/>
        </div>
    )
}

export default NotFound;