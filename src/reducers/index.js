import { combineReducers } from 'redux';
import boards from './boards';
import columns from './columns';
import checkouts from './checkouts';

const rootReducer = combineReducers({ boards, columns, checkouts });

export default rootReducer;