import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'

export default function TaskForm() {

  const { tasks, addTask, updateTask } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  })

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(task.id) {
      updateTask(task)
    }
    else {
      addTask(task)
    }
    navigate('/')
  }

  useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id)
    if(taskFound) {
      setTask(taskFound)
    } else {
      setTask({
        id: '',
        title: '',
        description: '',
      })
    }
  }, [params.id])

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className="w-8/12">
          <form className='bg-indigo-50 px-5 py-5 mb-4 flex flex-col space-y-4 rounded-lg' onSubmit={handleSubmit}>
            <h2 className='font-semibold'>{ task.id ? 'Editar tarea' : 'Añadir tarea' }</h2>
            <div className='space-y-4'>
              <input 
                type="text" 
                name="title" 
                placeholder='Escribe un titulo' 
                className='rounded-lg outline-none py-2 px-4 w-full transition-transform duration-300 focus:scale-[1.02]'
                onChange={handleChange}
                value={task.title}
              />
              <textarea 
                name="description" 
                rows="2" 
                placeholder='Escribe una descripción' 
                className='rounded-lg outline-none py-2 px-4 w-full transition-transform duration-300 focus:scale-[1.02]'
                onChange={handleChange}
                value={task.description}
              ></textarea>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg items-center'>
              { task.id ? 'Editar' : 'Agregar' }
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
