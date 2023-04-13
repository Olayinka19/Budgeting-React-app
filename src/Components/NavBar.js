import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React from 'react'

function Navbar() {
  return (
    <div className="Nav">

    
      <main>
        <h1>
      <Link to = "/" className="link">PocketPenny</Link>
      </h1>
      <Button variant="success">
        {/* <Link to ="/transactions/:index" className="link">Show Transactions</Link> */}
      </Button> 
      <Button className="bttn">
        <Link to ="transactions/new" className="link">New Transactions</Link>
      </Button> 
      <Button className="bttn">
        <Link to ="/transactions/:index/edit"   className="link">Edit transactions</Link>
      </Button> 
      <Button className="bttn">
        <Link to ="transactions" className="link">Transactions</Link>
      </Button> 
      </main>
    </div>
  )
}


export default Navbar
