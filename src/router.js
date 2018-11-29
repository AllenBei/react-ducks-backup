import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './pages/TodoList/TodoList';

class IRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                    <div>
                        <Route path='/' exact component={TodoList} ></Route>
                        <Route path='/detail' exact render={()=><div>man</div>} ></Route>
                    </div>
            </BrowserRouter>
        );
    }
}

export default IRouter;