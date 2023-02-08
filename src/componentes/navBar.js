import React from "react";

import {Link} from "react-router-dom";
import { CartWidget } from "./cart";

function NavBar (){



return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Delta Informatica</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     
     <Link to="/"> 
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      </Link>

      <Link to="/productos">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Compontes</a>
      </li>
      </Link>
      
    </ul>
  </div>
</div>
<Link to="/cart">
<CartWidget/>
</Link>
</nav>);
}

export default NavBar;