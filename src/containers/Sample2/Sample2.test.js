import React from 'react';
import { cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { render } from 'setupTests';
import { Sample2 } from './Sample2';

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

    const { wrapper, getByText } = render(<Sample2 {...props} store={store} />);

    return {
        props,
        wrapper,
        getByText,
    };
};

describe('Sample2 container', () => {
    afterEach(cleanup);
    it('should render', () => {
        const { wrapper } = setup();

        expect(wrapper).toMatchSnapshot();
    });
});
