import React from 'react';

const SearchArea = (props) => {
    return (
    <div className="searcharea">
        <form onSubmit={props.searchBooks} action= "">
            <input onChange={props.handleSearch} type="text"/>
            <button type="submit">Search</button>
        </form>

    </div>
    )
}

export default SearchArea;