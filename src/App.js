// import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
// import Apitest from '../src/pages/api_test/Apitest'
// import Main from '../src/pages/formhandling/main'
import Dynamicform from '../src/pages/dynamicform/dynamicform'
// import Aform from '../src/pages/advanceformhandling/aform'
import Simpleroute from "./pages/reactroutes/simpleroute";
import Mainprop from "./pages/props/mainprop";
import Usefetchis from "./pages/usefetch/usefetchis";
import Usestate from "./pages/hooks/usestate";

function App() {
  return (
    <div>
      {/* simple api test */}
      {/* <Apitest/> */}
      {/* simple form test */}
      {/* <Main/> */}
      {/* <Dynamicform/> */}
      {/* <Aform/>
      <Aform/> */}
      {/* <Simpleroute/> */}
      {/* <Mainprop/> */}
      {/* <Usefetchis/> */}
      <Usestate/>
    </div>
  );
}

export default App;
