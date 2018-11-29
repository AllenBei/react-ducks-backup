import { createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer'
// import  todoliststore  from './TodoListStore';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//1.建仓库，拿reducer处理笔记，window那个是redux插件使用

export default store;