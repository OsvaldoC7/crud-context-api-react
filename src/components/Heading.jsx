import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export default function Heading() {

  const { deleteTasks } = useContext(GlobalContext)

  return (
    <div className='bg-indigo-500'>
      <div className="flex item-center mb-10">
        <Link to='/' className='self-center'>
          <h5 className="text-gray-50 font-bold text-2xl self-center mx-4">Task app</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to='/add'>
            <button className='bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center'>
              <span className="fas fa-plus mr-2"></span>
              Agregar
            </button>
          </Link>
            <button onClick={() => deleteTasks()} className='bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg ml-2 items-center'>
              <span className="fas fa-trash"></span>
            </button>
        </div>
      </div>
    </div>
  )
}
