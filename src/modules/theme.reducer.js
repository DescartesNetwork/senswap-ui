/**
 * Documents
 * @default defaultData
 */

const defaultState = 'dark'


/**
 * Switch theme
 */
export const SET_THEME = 'SET_THEME';
export const SET_THEME_OK = 'SET_THEME_OK';
export const SET_THEME_FAIL = 'SET_THEME_FAIL';


export const setTheme = (theme) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SET_THEME });

      if (typeof (theme) !== 'boolean') {
        const er = 'Input is null';
        dispatch({ type: SET_THEME_FAIL, reason: er });
        return reject(er);
      }
      const data = theme ? 'dark' : 'light';
      dispatch({ type: SET_THEME_OK, data });
      return resolve(data);
    });
  }
}


/**
 * Reducder
 */
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME_OK:
      return action.data;
    case SET_THEME_FAIL:
      return action.data;
    default:
      return state;
  }
}