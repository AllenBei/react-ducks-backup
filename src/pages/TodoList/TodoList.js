import React, {Component} from 'react'
import { connect } from 'react-redux';
import 'antd/dist/antd.css' 
// import axios from 'axios'
import store from '../../store/index' //2.引入和引用仓库
// import {getInputChangeAction,getAddItemAction,getDelItemAction} from './store/actionCreators'
import {actions} from '../../store/TodoListStore'
import TodoListUI from './TodoListUI'


class TodoList extends Component {

    constructor(props) {
        super(props)
        // console.log(store.getState());
        //this.handleItemDel = this.handleItemDel.bind(this)
        this.state = store.getState();      //2.引用仓库数据  这是getter  
        //当用connect时候，就不必再用subscribe订阅更新了，connect源码写了。
        // store.subscribe(this.handleStoreChange) //5.转了一圈，实时更新监听仓库数据变化  // 这是类似mobx的@observer
        // console.log(this.props)
    }

    render(){
        const { handleInputChange,handleBtnclick,handleItemDel } = this.props;
        return (
        <TodoListUI 
        inputValue={this.props.inputValue} 
        handleInputChange={handleInputChange}
        handleBtnclick={handleBtnclick}
        list={this.props.list}
        handleItemDel={handleItemDel}
        />
        )
    }
    componentDidMount() {
        // axios.get('api/list.json').then((res) => {

        // })
    }
    handleStoreChange= ()=> {
        this.setState(store.getState())
    }
  
    
}

//getter
//从redux的state中get值
const mapStateToProps = (state) => {
    // console.log(state._root.entries[0][1].inputValue)
	return {
		inputValue: state._root.entries[0][1].inputValue,
        list: state._root.entries[0][1].list,
	}
}

//从redux中用相对于方法（类似vuex的dispatch）
const mapDispathToProps = (dispatch) => {
    return{
        handleInputChange(e){
            // const action = actions.getInputChangeAction(e.target.value)         //这是setter，发起action啊
            dispatch(actions.getInputChangeAction(e.target.value) )          //应用层“说”修改数据
        },
        handleBtnclick () {
            store.dispatch(actions.getAddItemAction())
        },
        handleItemDel(index)  {
            // console.log(index);
            store.dispatch(actions.getDelItemAction(index))
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList);