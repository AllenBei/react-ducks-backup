import { combineReducers } from 'redux-immutable';
import  todo  from './TodoListStore';

const reducer = combineReducers({
	todo
});

export default reducer;
