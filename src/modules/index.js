import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ui from './ui.reducer';
import theme from './theme.reducer'

// eslint-disable-next-line
export default (history) => combineReducers({
  router: connectRouter(history),
  ui,
  theme,
});