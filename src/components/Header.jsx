import React from 'react'

export const Header = (props) => {
  const {count} = props;
  return (
    <>
        <section className='flex sticky justify-between w-screen h-20 bg-slate-950 text-cyan-200 items-center px-5'>
            <p className='text-3xl font-extrabold'>To-Do</p>
            <p><b className='text-3xl'>{count}</b><i className='text-sm'>&nbsp;left</i></p>
        </section>
    </>
  )
}
