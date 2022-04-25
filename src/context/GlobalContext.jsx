import { createContext, useReducer } from 'react'
import { appReducer } from './AppReducer'
import { v4 } from 'uuid'

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Title 1',
      description: 'Description 1',
      done: false
    },
    {
      id: '2',
      title: 'Title 2',
      description: 'Description 2',
      done: false
    },
  ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = task => dispatch({ type: 'ADD_TASK', payload: {...task, id: v4()} })

  const deleteTask = id => dispatch({ type: 'DELETE_TASK', payload: id })

  const deleteTasks = () => dispatch({ type: 'DELETE_TASKS' })

  const updateTask = task => dispatch({ type: 'UPDATE_TASK', payload: task})

  return (<GlobalContext.Provider value={{...state, addTask, deleteTask, deleteTasks, updateTask}}>
    { children }
  </GlobalContext.Provider>)
}