import * as actionTypes from 'constants/actionTypes';

export const navigateToNextScreen = nextScreen => ({
    type: actionTypes.REDIRECT_SCREEN,
    path: nextScreen,
});
