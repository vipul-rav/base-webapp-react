import React from 'react';
import { render } from 'setupTests';
import { SampleComponent } from './SampleComponent';
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
        <SampleComponent {...props} store={store} />
    );

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Sample Component', () => {
    it('should render', () => {
        const overrideProps = {
            isLoading: true,
            postList: [
                {
                    id: '1',
                    title: 'title1',
                },
            ],
        };
        const { wrapper } = setup(overrideProps);
        expect(wrapper).toMatchSnapshot();
    });
});
