import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getPostList } from 'redux/actions/postAction';
import { navigateToNextScreen } from 'redux/actions/sampleAction';
import { SampleComponent } from 'components/SampleComponent/SampleComponent';
import { withContent } from 'hocs/withContent';

const Sample = memo(function Sample({
    getPostList,
    navigateToNextScreen,
    content,
    postList,
}) {
    useEffect(
        () => {
            getPostList();
        },
        [getPostList]
    );

    return (
        <div>
            <h1>{content.homePageText}</h1>
            <SampleComponent postList={postList} />
            <button
                id="btnContinue"
                onClick={() => navigateToNextScreen('/sample2')}
            >
                <span>{content.btnContinue}</span>
            </button>
        </div>
    );
});

Sample.propTypes = {
    navigateToNextScreen: PropTypes.func,
    content: PropTypes.object.isRequired,
    getPostList: PropTypes.func,
    postList: PropTypes.array,
};

const mapStateToProps = state => ({ postList: state.post.postList });
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            navigateToNextScreen,
            getPostList,
        },
        dispatch
    );

const SampleContainer = compose(
    withContent(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Sample);

export { SampleContainer };
