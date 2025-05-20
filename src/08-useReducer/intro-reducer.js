

//estado inicial
const initialState =[{
    id:1,
    todo: ' recolectar la piedra del alma',
    description: 'gajshgdhjsgd',
    priotiry:
    done: false,
}]


//useReducer---> una funcion // el estado inicial mandamos a nuestro reducer y tenemos una accion para regresar un nuevo estado
const todoReducer = ( state = initialState, action = {} ) => {

    if (action.type === '[TODO] add todo'){
        return[...state, action.payload];
    }

    //siempre tiene que regresar un estado
    return state;

}

let todos = todoReducer();

//para hacer una modificacion a nuestro reducer, hayq ue darle una accion y esa accion le dice que modificarce
//creamos un todo
const newTodo ={
    id:2,
    todo:'recolectar la piedra del poder',
    done:false,
}

//este es nuestra accion
const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction );

console.log({state: todos});



