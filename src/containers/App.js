import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRouter } from 'routes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { LoaderComponent } from 'components/LoaderComponent/LoaderComponent';
import { HeaderComponent } from 'components/HeaderComponent/HeaderComponent';
import { ErrorComponent } from 'components/ErrorComponent/ErrorComponent';
import { withContent } from 'hocs/withContent';

class App extends Component {
    render() {
        const { loader, content, error } = this.props;

        return (
            <div>
                <HeaderComponent />
                <div>
                    <ErrorComponent
                        hasError={error.showError}
                        content={content}
                    >
                        {AppRouter}
                        <LoaderComponent
                            isLoading={loader.loading}
                            text={content.loadingText}
                        />
                    </ErrorComponent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader,
    error: state.error,
});

App.propTypes = {
    loader: PropTypes.shape({
        loading: PropTypes.bool,
    }),
    error: PropTypes.shape({
        loading: PropTypes.bool,
    }),
    content: PropTypes.object.isRequired,
};

const AppCompose = compose(
    withContent(),
    connect(mapStateToProps)
)(App);

export { AppCompose as App };
