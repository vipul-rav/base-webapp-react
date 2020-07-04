import React from 'react';
import { render } from 'setupTests';
import { ErrorComponent } from './ErrorComponent';
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
        <ErrorComponent {...props} store={store} />
    );

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Error Component', () => {
    it('should render', () => {
        const overrideProps = {
            hasError: true,
            content: {
                errorHeader: 'Technical Error',
                errorText: 'There are some technical error',
                ExitText: 'Exit',
            },
        };
        const { wrapper } = setup(overrideProps);
        expect(wrapper).toMatchSnapshot();
    });
});
