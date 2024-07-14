import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const TodoList = (props) => {
    const {todoObject, index, deleteTodo} = props;

    const setPriority = () => {
        let className = 'h-20 w-2 mr-5';
        if (todoObject.priority == 1) {
                className += " bg-green-500";
            }
            else if (todoObject.priority == 2) {
                    className += " bg-yellow-500";
                }
                else className += " bg-red-500";
                return <div className={className}></div>;
    }

  return (
    <>
        <div className='flex flex-1 flex-row justify-between bg-slate-50 m-5 p-9 rounded-xl'>
            <div className='flex flex-row'>
            {setPriority()}
            <div className="flex flex-col">
            <li className='text-sm sm:text-xl'>{todoObject.task}</li>
            <p className='text-gray-400'>{todoObject.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            <p className='text-gray-400'>{todoObject.date.getDate()}/{todoObject.date.getMonth() + 1}/{todoObject.date.getFullYear()}</p>
            </div>
            </div>
            <button onClick={() => deleteTodo(index)} >
            <FontAwesomeIcon icon={faTrashCan} className='scale-150 bg-red-900 hover:bg-red-600 text-white p-2 rounded-3xl transition-all duration-150'/>
            </button>

        </div>
    </>
  )
}
