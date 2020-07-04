import React from 'react';
import { render } from 'setupTests';
import { HeaderComponent } from './HeaderComponent';
import configureMockStore from 'redux-mock-store';

const content = {
    ExitText: 'Exit',
    btnContinue: 'Continue',
    homePageText: 'Home Page',
};

const setup = overridesProps => {
    const props = {
        content: content,

        ...overridesProps,
    };

    const mockStore = configureMockStore();
    const store = mockStore({
        config: {
            externalContent: content,
        },
    });

    const { wrapper, getByText } = render(
        <HeaderComponent {...props} store={store} />
    );

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Header Component', () => {
    it('should render', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
