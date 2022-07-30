import { Link } from "react-router-dom";

import React from 'react'

function Navbar() {
  return (
    <div className="Nav">
      <main>
        <h1>
      <Link to = "/transactions" className="link">🅷🅴🅽🅳🆁🅸🆇</Link>
      </h1>
      <button className="bttn">
        <Link to ="transactions/new" className="link">♚🐊  ᵗ𝐫ⓐ𝓷Ş𝓐ＣŤＩ𝐎ℕ  ☟🔥</Link>
        <marquee direction="up">Transaction</marquee>
      </button> 
      </main>
    </div>
  )
}


export default Navbar
