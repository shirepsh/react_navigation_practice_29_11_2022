import React from 'react'
import {Link} from "react-router-dom";

const Navbar = ()=> {
  return (
           <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/Test1">Test1</Link></li>
            <li><Link to="/Test2">Test2</Link></li>
            <li><Link to="/Test3">Test3</Link></li>
            <li><Link to="/Test4">Test4</Link></li>
          </ul>
        </div>

  )
}

export default Navbar