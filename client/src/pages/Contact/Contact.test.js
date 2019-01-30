import React from 'react';
import {mount} from 'enzyme';
import {Provider} from "react-redux";
import {I18nextProvider} from 'react-i18next'

import {findByTestAttr, mockStore} from '../../utils/testUtils';
import Contact from './Contact';
import i18n from '../../locale/i18nTestsConfig';

const defaultState = {
    contact: {
        isSubmitting: false,
        error: null,
        success: false,
    }
};

const setup = (initialState = defaultState) => {
    const store = mockStore(initialState);

    return mount(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Contact/>
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
        const component = findByTestAttr(wrapper, 'component-contact');
        expect(component.length).toBe(1);
    });

});
