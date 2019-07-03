/** Action constants for the common components */
export const COMMON_ACTIONS = {
  SET_LOADER_VISIBILITY: 'SET_LOADER_VISIBILITY',
  SET_SNACKBAR_MESSAGE: 'SET_SNACKBAR_MESSAGE',
  SET_SNACKBAR_VISIBILITY: 'SET_SNACKBAR_VISIBILITY'
}

/**
 * Function setting loader's visibility
 * @param {boolean} isVisible
 */
export const setLoaderVisibility = (isVisible) => ({
  type: COMMON_ACTIONS.SET_LOADER_VISIBILITY,
  payload: isVisible
});

/**
 * Function setting loader's visibility
 * @param {boolean} isVisible
 */
export const setSnackbarVisibility = (isVisible, message) => ({
  type: COMMON_ACTIONS.SET_SNACKBAR_VISIBILITY,
  payload: { isVisible, message }
});