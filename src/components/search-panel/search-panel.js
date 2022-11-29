import React from 'react'

export default function SearchPanel() {
    const searchText = "placeholder..."
    return <input className='form-control' type="text" placeholder={searchText} id="search-panel"/>
}