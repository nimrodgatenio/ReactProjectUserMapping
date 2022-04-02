import React from 'react'

const SearchAndFilter = ({searchInput, setSearchInput, UsersMapping}) => {

    //handling remove filters request:
    const removeFilters = (e) => {
        e.preventDefault()
        setSearchInput("")
    }
    
    return (
        <form className='searchAndFilterContainer'>
            <input type="text" placeholder='Search by context' value={searchInput}
                onChange={(e) => setSearchInput(e.target.value) && UsersMapping()} 
                className="searchAndFilterInput" />
                
            <button onClick={(e) => removeFilters(e)} className="searchAndFilterInput searchAndFilterInput-rmv" title='Remove filters'>X</button>
        </form>
    )
}

export default SearchAndFilter
