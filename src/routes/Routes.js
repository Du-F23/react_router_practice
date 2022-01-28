import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../components/Home";
import Datos0 from "../components/Datos00";
import Datos1 from "../components/Datos01";
import Datos2 from "../components/Datos02";
import Datos3 from "../components/Datos03";
import Datos4 from "../components/Datos04";
import Datos5 from "../components/Datos05";
import Error from "../components/Error";
import Credential from "../components/Credencial";
import Datos from "../credentials/Datos_credenciales";
import Contenido2 from "../components/Contenido2";

export default class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/datos00" element={<Datos0 />} />
          <Route exact path="/datos01" element={<Datos1 />} />
          <Route exact path="/datos02" element={<Datos2 />} />
          <Route exact path="/datos03" element={<Datos3 />} />
          <Route exact path="/datos04" element={<Datos4 />} />
          <Route exact path="/datos05" element={<Datos5 />} />
          <Route exact path="/credential" element={<Credential />} />
          <Route exact path="/mostrar_credenciales" element={<Datos />} />
          <Route exact path="/contenido2" element={<Contenido2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
