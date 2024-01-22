import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="mb-4 text-center task-manager-header">
            <h1 onClick={()=>{navigate('/')}} className="heading">Task Manager</h1>
        </header>
    )
}

export default Header