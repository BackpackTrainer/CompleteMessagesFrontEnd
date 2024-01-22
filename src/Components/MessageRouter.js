import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import GetAllMessages from './GetAllMessages'
import MessageHome from './MessageHome'

const MessageRouter = () => {
  return (
    <div>
        <ul style ={{"list-style": "none"}}>
            <li>
                <a href='/'>HOME</a>
            </li>
                <a href='/all'>ALL MESSAGES</a>
        </ul>
        <Router>
            <Routes>
                <Route exact path ='/' element ={< MessageHome />} />
                <Route exact path ='/all' element ={< GetAllMessages />} />
            </Routes>
        </Router>


    </div>
  )
}

export default MessageRouter