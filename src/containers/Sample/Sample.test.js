import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { render } from 'setupTests';
import { SampleContainer } from './Sample';

const content = {
    ExitText: 'Exit',
    btnContinue: 'Continue',
    homePageText: 'Home Page',
};

const setup = overridesProps => {
    const props = {
        content: content,
        navigateToNextScreen: jest.fn(),
        getPostList: jest.fn(),
        ...overridesProps,
    };

    const mockStore = configureMockStore();
    const store = mockStore({
        config: {
            externalContent: content,
        },
        post: {
            postList: [
                {
                    id: '1',
                    title: 'title1',
                },
            ],
        },
    });

    const { wrapper, getByText } = render(
        <SampleContainer {...props} store={store} />
    );

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Sample container', () => {
    afterEach(cleanup);
    it('should render', () => {
        const { wrapper } = setup();

        expect(wrapper).toMatchSnapshot();
    });
    it('has Continue button', () => {
        const { getByText } = setup();
        expect(getByText('Continue')).toBeInTheDocument();
    });
    it('click Continue button', () => {
        const { getByText } = setup();

        fireEvent.click(getByText('Continue'));
    });
});
