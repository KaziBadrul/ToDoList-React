import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const TodoList = (props) => {
    const {todoObject, index, deleteTodo} = props;

    const setPriority = () => {
        let className = 'h-auto w-2 mr-5';
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
        <div className='flex flex-1 flex-row justify-between bg-slate-50 dark:bg-[#282854] 
        mx-2 my-5 sm:m-5 py-5 px-9 sm:p-9 rounded-xl shadow-lg shadow-[#282854]/15 dark:shadow-[#232854]/10'>
            <div className='flex flex-row'>
            {setPriority()}
            <div className="flex flex-col">
            <li className='text-sm sm:text-xl mb-2 sm:m-0 dark:text-white'>{todoObject.task}</li>

            <p className='text-gray-400 opacity-70 text-[12px] sm:text-sm'>
              {todoObject.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>

            <p className='text-gray-400 opacity-70 text-[12px] sm:text-sm'>
              {todoObject.date.getDate()}/{todoObject.date.getMonth() + 1}/{todoObject.date.getFullYear()}
              </p>
            </div>
            </div>
            <button onClick={() => deleteTodo(index)} >
            <FontAwesomeIcon icon={faTrashCan} 
            className='scale-125 sm:scale-150 bg-red-900 dark:bg-transparent text-white dark:text-red-600 p-2 rounded-full sm:rounded-3xl transition-all duration-150'/>
            </button>

        </div>
    </>
  )
}
