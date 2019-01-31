import React from 'react';
import Head from "./Head";
import PageHead from "./PageHead";
import i18next from 'i18next';

function ComponentError() {

    return (
        <div>
            <Head title={i18next.t("somethingWrong")}/>
            <PageHead title={i18next.t("oops")} description={i18next.t("somethingWrong")}/>
        </div>
    )
}

export default ComponentError;