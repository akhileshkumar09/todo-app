import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState : {
        todos :  JSON.parse(localStorage.getItem('todos')) || []
    },
    reducers : {
        addTodo : (state, action )=>{
            const newTodo = { id: Date.now(), text: action.payload, completed: false };
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleTodo : (state, action ) =>{
            const todo = state.todos.find((todo)=> todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        deleteTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;