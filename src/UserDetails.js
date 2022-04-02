import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Styles
import './styles/UserDetails.css'

const UserDetails = () => {

    //data state
    const [user, setUser] = useState({
        isLoading: true,
        data: []
    })

    //get the username from the query params:
    const {username, page} = useParams()

    //find, beautify, and render:
    const LoadUser = () => {
        return user.data.map(user => (
                <div key={user.email} className="wrapper">
                    <div className='primary'>
                        <div key={username} className="userDetailsContainer">
                            <div className='userDetailsHeader'>
                                <img src={user.picture.medium} alt="profilePic"/>
                                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                            </div>
                            <div className="userDetailsBody">
                                <p>Age: {user.dob.age}</p>
                                <p>Email:<a href={`mailto:${user.email}`}> {user.email}</a></p>
                                <p>Gender: {user.gender}</p>
                                <p>Phone number: {user.cell}</p>
                            </div>
                        </div>
                    </div>
                    <div className='secondary'>
                        <iframe title="map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDxM7GnjYLiSKdBZGkcIFYp3DLsWILt794&q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}/>
                    </div>
                </div>
            )
    )
}
    
    const fetchData = async () => {
        try {
            const uri = `https://randomuser.me/api/?seed=123&results=10&page=${page}`
            const results = await axios.get(uri)
            setUser({
                isLoading: false,
                data: results.data.results.filter(u => u.login.username === username)
            })
        }
        catch (err) {
            console.log(err);
        }
    }
        
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='pageContainer'>
            <h1>{username}'s Profile</h1>
            {!user.isLoading && username ? <LoadUser/> : <h2>Loading...</h2>}
            <Link className="backLink" to={`/page/${page}`}>Back to main page</Link>
        </div>
    )
}

export default UserDetails


