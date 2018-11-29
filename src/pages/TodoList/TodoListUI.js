// import React, { Component } from 'react';
import React from 'react';
import { Input,Button,List} from 'antd';

//无状态组件
const TodoListUI = (props)=> {
    return (
        <div>
            <div>
                <Input placeholder="Basic usage" 
                value={props.inputValue}
                style={{width:'300px', margin: '10px',}} 
                onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnclick}>提交</Button>
                <List
                    style= {{margin: '10px',width:'300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item 
                        onClick={props.handleItemDel.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        </div> 
    )
}
//普通组件，是类，有生命周期，比无状态组件性能损耗高些，若只有render函数（只负责渲染），即可用无状态组件。


// class TodoListUI extends Component {
//     render() {
//         return (
//         <div>
//             <div>
//                 <Input placeholder="Basic usage" 
//                 value={this.props.inputValue}
//                 style={{width:'300px', margin: '10px',}} 
//                 onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleBtnclick}>提交</Button>
//                 <List
//                     style= {{margin: '10px',width:'300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (<List.Item 
//                         onClick={this.props.handleItemDel.bind(this,index)}>{item}</List.Item>)}
//                 />
//             </div>
//         </div>
//         )
//     }
// }

export default TodoListUI