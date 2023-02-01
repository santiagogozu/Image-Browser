import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
    return (

        <div class="searchBox">
            {/* <input class="searchInput" type="text" name="" placeholder="Search" onChange={props.changeInput} onKeyDown={props.changeInputButton} />
            <button class="searchButton" href="#">
                <i class="material-icons">
                    <FontAwesomeIcon icon={faSearch} />
                </i>
            </button> */}
            <div id="gradient"></div>
            <input type="search" placeholder="Search" onChange={props.changeInput} onKeyDown={props.changeInputButton} />
            <button type="submit" value="search" onClick={props.searchButton}>&nbsp;</button>
        </div>

    );
}

export default Search;
