import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {
  const {count, darkModeOn, setDarkModeOn} = props;

  const changeColorScheme = () => {
    setDarkModeOn(!darkModeOn);
  };

  return (
    <>
        <section className='flex fixed z-50 justify-between w-screen h-20 bg-[#130523] text-cyan-200 items-center px-5'>
            <p className='text-3xl font-extrabold'>To-Do</p>
            <div className='flex flex-row items-center'>
            <p className='mr-3'><b className='text-3xl'>{count}</b><i className='text-sm'>&nbsp;left</i></p>
            <button onClick={changeColorScheme}>
            <FontAwesomeIcon icon={faCloudSun} className='dark:text-blue-400'/>
            </button>
            </div>
        </section>
    </>
  )
}
