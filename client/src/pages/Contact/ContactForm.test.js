import React from 'react';
import {mount} from 'enzyme';
import {Provider} from "react-redux";
import {I18nextProvider} from 'react-i18next'

import {findByTestAttr, mockStore} from '../../utils/testUtils';
import ContactForm from './ContactForm';
import i18n from '../../locale/i18nTestsConfig';

const initialState = {
    form: {
        contact: {
            registeredFields: {
                name: {name: "name", type: "Field", count: 1},
                email: {name: "email", type: "Field", count: 1},
                message: {name: "message", type: "Field", count: 1},
            },
            values: {
                name: "Edd",
                email: "email",
                message: "message"
            }
        }
    }
};


const setup = (initialProps = {}) => {
    const store = mockStore(initialState);

    return mount(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <ContactForm {...initialProps}/>
            </I18nextProvider>
        </Provider>
    )
};


describe('render', () => {
    let wrapper;

    beforeEach(() => {
        const initialProps = {success: false, isSubmitting: false, pristine: false};
        wrapper = setup(initialProps);
    });

    test('it renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-contact-form');
        expect(component.length).toBe(2);
    });

    test('renders input boxes', () => {
        const inputName = findByTestAttr(wrapper, 'input-name');
        const inputEmail = findByTestAttr(wrapper, 'input-email');
        const inputMessage = findByTestAttr(wrapper, 'input-message');

        expect(inputName.length).toBe(2);
        expect(inputEmail.length).toBe(2);
        expect(inputMessage.length).toBe(2);

    });

    test('renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(2);
    });

});

describe('form submitted successfully', () => {
    let wrapper;

    beforeEach(() => {
        const initialProps = {success: true, isSubmitting: false, pristine: false};
        wrapper = setup(initialProps);
    });

    test('it shows success message', () => {
        const successMessage = findByTestAttr(wrapper, 'success-message');
        expect(successMessage.length).toBe(1);
    });

    test('does not render form', () => {
        const form = findByTestAttr(wrapper, 'component-contact-form');
        expect(form.length).toBe(0);
    });

});

describe('onSubmit function', () => {
    let wrapper;
    let handleSubmit;
    beforeEach(() => {
        handleSubmit = jest.fn();
        const initialProps = {success: false, isSubmitting: false, pristine: false, handleSubmit};
        wrapper = setup(initialProps);

        const form = findByTestAttr(wrapper, 'component-contact-form').first();
        form.first().simulate('submit');
    });


    test('onSubmit was called once', () => {
        const submitCount = handleSubmit.mock.calls.length;
        expect(submitCount).toBe(1);
    });

    test('onSubmit was called with input value as argument', () => {
        const formArg = handleSubmit.mock.calls[0][0];

        const inputName = findByTestAttr(wrapper, 'input-name').first().get(0);
        const inputEmail = findByTestAttr(wrapper, 'input-email').first().get(0);
        const inputMessage = findByTestAttr(wrapper, 'input-message').first().get(0);


        // expect(handleSubmit.mock.instances[0]).toBe("Edd")
        // console.log(formArg.target);

        // expect(handleSubmit).toHaveBeenCalledWith({
        //     name: "Edd",
        //     email: "email",
        //     message: "message"
        // });

        // expect(guessedWordArg).toBe(guessedWord);
    });


});