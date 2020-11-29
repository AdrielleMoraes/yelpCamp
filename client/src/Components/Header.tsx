import React from 'react'

function Header() {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Yelp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
               </ul>
            </div>
         </nav>

         <div className="jumbotron jumbotron-fluid">
            <div className="container">
               <h1 className="display-4">Restaurant Finder</h1>
               <p className="lead">Get a little taste of life</p>
            </div>
         </div>
      </div>
   )
}

export default Header
