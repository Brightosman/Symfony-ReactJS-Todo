import React, { Component, createContext } from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {id:1, name:"Hello"},
                {id:2, name: "set ur alarm  2:30AM"},
                {id:3, name: "set ur alarm  7:30AM"}, 
                {id:4, name: "5hrs sleep at 2:30AM"},
                {id:5, name: "wake-up around 7:30AM"},
                {id:6, name: "read the reports by  8:30AM"},

            ],
        };
    }

    //C
    createTodo(event, todo){
        event.preventDefault();
        const todos = [todo, ...this.state.todos];
        this.setState({
            todos,
        }); 

    }


    //R
    readTodo(){
        
    }


    //U
    updateTodo(){
        
    }


    //D
    deleteTodo(){
        
    }
    
    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;
