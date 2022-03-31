import { useEffect, useState } from "react";
import axios from "axios";

const Apitest = () => {
  const [date, setdate] = useState(0);

  const [x, setx] = useState("hello jay rathod");
  useEffect(() => {
    const fatchdata = async () => {
      setTimeout(async () => {
        const datais = await axios.get("https://api.thecatapi.com/v1/sources");
        setdate(JSON.stringify(datais));
      }, 1000);
    };
    fatchdata();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: `#12345${date}` }}>
      <h1>{date}</h1>
      <h2>yashupalsinh</h2>
      <h3>{x}</h3>
    </div>
  );
};

export default Apitest;