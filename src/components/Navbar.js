import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'


const Navbar = _ => {
    const {books} = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>You have {books.length} books to get through...</p>
        </div>
    )
}

export default Navbar