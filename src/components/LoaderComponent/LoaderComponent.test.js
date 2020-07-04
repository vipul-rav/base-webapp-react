import React from 'react';
import { render } from 'setupTests';
import { LoaderComponent } from './LoaderComponent';
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
        <LoaderComponent {...props} store={store} />
    );

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Loader Component', () => {
    it('should render', () => {
        const overrideProps = {
            isLoading: true,
            content: {
                loadingText: 'Please wait...',
            },
        };
        const { wrapper } = setup(overrideProps);
        expect(wrapper).toMatchSnapshot();
    });
});
