import axios from "axios";

const state = {
    todo: []
}

const getters = {
    allTodos: (state)=>{
        return state.todo
    }
}

const actions = {
    getTodos: async ({commit}) =>{
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        
        commit('setTodos', response.data)
    },
    addTodos: async({commit}, title)=>{
        try{
            let response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title, 
                completed:false
            })

            commit('newTodo', response.data)
            return true
        }catch(e){
            return false
        }
    },
    deleteTodo: async ({ commit }, id) =>{
        let response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id)
    },
    filterTodo: async ({ commit }, event)=>{
        let limit = event.target.options[event.target.options.selectedIndex].innerText
 
        let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        commit('setTodos', response.data)
    },
    updateTodo: async ({ commit }, updTodo)=>{
        console.log(updTodo)
        let response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)

        commit('updateTodo', response.data);

    }
}

const mutations = {
    setTodos: (state, data)=>{
        state.todo = data
    },
    newTodo: (state, data)=>{
        state.todo.unshift(data)
    },
    removeTodo: (state, id) => {
        state.todo = state.todo.filter((elem)=>{
            return elem.id !== id
        })
    },
    updateTodo: (state, updTodo) => {
        let index = state.todo.findIndex((todo)=>{
            return todo.id == updTodo.id
        })
        if(index != -1){            
            state.todo.splice(index, 1, updTodo)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}