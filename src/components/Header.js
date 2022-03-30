import React from 'react'

export default function Header(props) {
 const {searchLocation, changeLocation, onPresskey} = props

  return (
    <div className="container">
    <nav className="navbar bg-weatherifier justify-content-between justify-content-md-between justify-content-sm-center px-5 py-3">
        <a className="navbar-brand">weatherifer</a>
        <form className="form-inline">
          <input 
          className="form-control mr-sm-2 search-input"
          onChange={changeLocation}
          id="search-input" 
          type="text"
          name="search"
          placeholder="Search"
          value={searchLocation}
          onKeyPress={onPresskey}
          aria-label="Search"/>
        </form>
      </nav>
    </div>
  )
}
