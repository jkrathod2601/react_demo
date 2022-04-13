import { Button, TextField, Typography } from "@mui/material";
import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { incnumber, decnumber } from "./actions/index";

const Main = () => {
  const mystate = useSelector((state) => state.changethenumber);
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <h1>React + Redux</h1>
      </center>
      <div className="buttoninput">
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(decnumber());
          }}
        >
          Remove Number
        </Button>
        <h1>{mystate}</h1>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            dispatch(incnumber());
          }}
        >
          Add Number
        </Button>
      </div>
    </div>
  );
};

export default Main;
