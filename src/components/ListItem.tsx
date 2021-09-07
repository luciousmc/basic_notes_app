import React from 'react'

interface Props {
  id: number,
  title: string,
  text: string,
  date: string
}

function ListItem({id, title, text, date}: Props): JSX.Element {
  return (
    <div className='p-4 border-b border-black cursor-pointer hover:scale-105 transition duration-150'>
      <h1 className='font-bold mb-2'>{title}</h1>
      <p className='text-xs tracking-wider'>
        {date} - {text}
      </p>
    </div>
  )
}

export default ListItem
