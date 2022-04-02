import React, {useState} from 'react'
import User from './User'
import { useParams } from "react-router-dom";
import PageSelector from './PageSelector';
import SearchAndFilter from './SearchAndFilter';
import axios from 'axios';
import { useEffect } from 'react'


const UsersList = () => {

    // data state
    const [Users, setUsers] = useState({
        isLoading: true,
        data: []
    })

    // input states:
    const [searchInput, setSearchInput] = useState("")
    
    //get the page number (default value: 1):
    let {page} = useParams()
    if(!page) page = 1

    // Handlers
    const UsersMapping = () => {

        // filtering and mapping the users:
        let filteredUsers = Users.data.filter(user => {
            return (
                user.name.first.toLowerCase().includes(searchInput.toLowerCase())
                || user.name.last.toLowerCase().includes(searchInput.toLowerCase())
                || user.email.toLowerCase().includes(searchInput.toLowerCase())
                || user.dob.age.toString().includes(searchInput.toLowerCase())
            )
        })

        // render data
        return (
            filteredUsers?.map(user => (
                <User page={page} key={user?.cell} user={user}/>
            ))
        )
    }
            
    const fetchData = async () => {
        try {
            const results = await axios.get(`https://randomuser.me/api/?seed=123&results=10&page=${page}`)
            setUsers({
                isLoading: false,
                data: results.data.results
            })
        }
        catch (err) {
            console.log(err);
        }
    }
        
    useEffect(() => {
        fetchData()
      }, [page])
    
    return (
        <div className='main'>
            <h1>Users Management System</h1>
            
            <SearchAndFilter
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                UsersMapping={UsersMapping}/>

            <table className='tableContainer'>
                <thead>
                    <tr className="tableHeader">
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {!Users.isLoading ? <UsersMapping/> : <h3>Loading...</h3>}
                </tbody>
            </table>
            <PageSelector />
        </div>
    )
}

export default UsersList
