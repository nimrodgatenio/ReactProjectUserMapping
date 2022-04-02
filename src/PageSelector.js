import React from 'react'
import {Link} from 'react-router-dom'
// Styles
import './styles/PageSelector.css'


//create and place page links:
const PageSelector = () => {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const PagesMapping = () => pages.map(page => (<Link key={page} className="page" to={`/page/${page}`}>{page}</Link>))

    return (
        <div className='pageSelector'>
            <PagesMapping/>
        </div>
    )
}

export default PageSelector
