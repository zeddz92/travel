import React from 'react';
import {mount} from 'enzyme';
import i18next from 'i18next';
import {Provider} from "react-redux";
import {I18nextProvider} from 'react-i18next'

import {findByTestAttr, mockStore} from '../../utils/testUtils';
import {company} from '../../utils/mockData/company';
import About from './About';
import i18n from '../../locale/i18nTestsConfig';


const defaultState = {
    company: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 0,
        error: null,
        data: company
    }
};
const setup = (initialState = defaultState) => {
    const store = mockStore(initialState);

    return mount(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <About/>
            </I18nextProvider>
        </Provider>
    )
};

describe('render', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('it renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-about');
        expect(component.length).toBe(1);
    });

});

describe('render translations', () => {
    let wrapper;

    beforeEach(() => {
        i18next.changeLanguage("jp");
        wrapper = setup();
    });

    test('it renders japanese translations', () => {
        const visionTitle = findByTestAttr(wrapper, 'vision-title');
        const missionTitle = findByTestAttr(wrapper, 'mission-title');
        const companyTitle = findByTestAttr(wrapper, 'company-title');

        expect(visionTitle.text()).toBe(i18next.t('vision'));
        expect(missionTitle.text()).toBe(i18next.t('mission'));
        expect(companyTitle.text()).toBe(i18next.t('company'));
    });
});