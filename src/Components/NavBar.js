import { Link } from "react-router-dom";

import React from 'react'

function Navbar() {
  return (
    <div className="Nav">
        <h1>
      <Link to = "/transactions">Transactions</Link>
      </h1>
      <button>
        <Link to ="transactions/new">New Transaction</Link>
      </button>
    </div>
  )
}

export default Navbar
