import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

export default function TaskList() {

  const { tasks, deleteTask } = useContext(GlobalContext)

  return (
    <>
      <div className='flex justify-center'>
        <div className="w-8/12">
          {tasks.map((task, index) => (
            <div className='bg-indigo-50 px-5 py-5 mb-4 flex flex-col rounded-lg' key={ task.id }>
              <div className="flex flex-row justify-between w-full pb-4">
                <div>
                  <h1 className='font-semibold'>{ index + 1 }.- { task.title }</h1>
                </div>
                <div className='flex flex-row space-x-4'>
                  <Link to={`/edit/${task.id}`}>
                    <span className='fas fa-edit'></span>
                  </Link>
                  <button onClick={() => deleteTask(task.id)}>
                    <span className='fas fa-times'></span>
                  </button>
                </div>
              </div>
              <hr className='mb-2 opacity-50' />
              <div>
                { task.description }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
