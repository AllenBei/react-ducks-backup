// 用ducks的形式，把reducer, ActionsType, ActionsCreators基于一页面，根据页面功能来分类。

//ActionsType
// export const CHANGE_INPUT_VALUE = 'change_input_value'  //直接字符串，写错不报错，痛苦。
// export const ADD_TODO_ITEM = 'add_todo_item'            //变成个变量，写错就报错，快捷。

export const types = {
     CHANGE_INPUT_VALUE : 'change_input_value',
     ADD_TODO_ITEM : 'add_todo_item' ,
     DELETE_TODO_ITEM : 'delete_todo_item' 
  }
  


//Actions
//state值
const defaultState = {
    inputValue: '',
    list: ['1','2']
}

//setter值
export default (state=defaultState,action) => {         //defaultState是默认值，两个值分别是：现在与将来的数据，固定的输入与固定的输出
    switch(action.type){

        case types.CHANGE_INPUT_VALUE:
        let newState1 = JSON.parse(JSON.stringify(state));
        // console.log(state,action);
        newState1.inputValue = action.value;
        return newState1

        case types.ADD_TODO_ITEM:
        let newState2 = JSON.parse(JSON.stringify(state));
        newState2.list.push(newState2.inputValue);
        // console.log(newState2);
        newState2.inputValue = ''
        return newState2 


        case types.DELETE_TODO_ITEM:
        let newState3 = JSON.parse(JSON.stringify(state));
        newState3.list.splice(action.index,1);
        return newState3
        
        default: ;
    }
    return state
}


// Action Creators
// export const getInputChangeAction = (value) => ({
//     type:types.CHANGE_INPUT_VALUE,
//     value
// })

//同setter，改成actions，让相对应页面dispatch
export const actions = {
    getInputChangeAction: (value)=>({
        type:types.CHANGE_INPUT_VALUE,
        value
    }),
    getAddItemAction:()=>({
        type: types.ADD_TODO_ITEM,
    }),
    getDelItemAction:(index)=>({
        type:types.DELETE_TODO_ITEM,
        index
    })
  }