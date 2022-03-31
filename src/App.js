import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Apitest from '../src/pages/api_test/Apitest'
import Main from '../src/pages/formhandling/main'
import Aform from '../src/pages/advanceformhandling/aform'


function App() {
  

  return (
    <div>
      {/* simple api test */}
      {/* <Apitest/> */}
      {/* simple form test */}
      {/* <Main/> */}
      <Aform/>
    </div>
  );
}

export default App;
