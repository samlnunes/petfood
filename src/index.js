import React from "react";
import ReactDOM from "react-dom";

import "./styles/global.css";
import Cadastro from "./pages/cadastro/cadastro";
import Checkout from "./pages/checkout/checkout";
import Petshop from "./pages/petshop/petshop";

ReactDOM.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>,
  document.getElementById("root")
);
