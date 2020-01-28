import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const NewBookForm = _ => {
    const {dispatch} = useContext(BookContext),
          [title, setTitle] = useState(''),
          [author, setAuthor] = useState(''),
          handleSubmit = e => {
              e.preventDefault()
              dispatch({type: 'ADD_BOOK',
                book: {title, author}
               })
              setTitle('')
              setAuthor('')
          }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type a title" value={title}
                onChange={e => setTitle(e.target.value)} required />
            <input type="text" placeholder="The author" value={author}
                onChange={e => setAuthor(e.target.value)} required />
            <input type="submit" value="Add a book" />
        </form>
    )
}

export default NewBookForm