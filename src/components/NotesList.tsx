import React from 'react'
import ListItem from './ListItem'

interface Props {
  data: Array<{id: number, title: string, text: string, date: string}>
}


function NotesList({ data }: Props): JSX.Element {
  return (
    <div className='bg-gray-700'>
      {data.map(({ id, title, text, date }) => (
        <ListItem key={id} id={id} title={title} text={text} date={date} />
      ))}
    </div>
  )
}

export default NotesList
