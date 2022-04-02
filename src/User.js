import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './styles/UsersList.css'


//render each individual user as an row in a table:
const User = ({user,page}) => {
    return (
            <tr>
                <td>
                    <Link to={`/${page}/user/${user.login.username}`}>
                        <img src={user.picture.thumbnail} alt="profilePic"/>
                    </Link>
                </td>
                <td>{user.name.first + ' ' + user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
                <td>{user.gender}</td>
            </tr>
        
    )
}

export default User
