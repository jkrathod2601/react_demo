import { useState } from "react";

const Dynamicform = () => {
  let [x, setx] = useState(0);
  let [formdata, setformdata] = useState({});

  const addformcalled = () => {
    let data = { ...formdata };
    data[x] = { name: "", age: "" };
    setformdata(data);
    setx(x + 1);
    // console.log(formdata)
  };

  const changename = (ele, event) => {
    let data = { ...formdata };
    data[ele].name = event.target.value;
    setformdata(data);
  };

  const changeage = (ele, event) => {
    let data = { ...formdata };
    data[ele].age = event.target.value;
    setformdata(data);
  };

  const submitform = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formdata));
    setformdata({});
  };

  const deleteform = (ele) => {
    let data = { ...formdata };
    delete data[ele];
    setformdata(data);
  };

  const returnform = (ele) => {
    return (
      <div key={ele}>
        <input
          placeholder="enter value name"
          value={formdata[ele].name}
          onChange={(event) => changename(ele, event)}
          required
        />
        <input
          placeholder="enter value age"
          value={formdata[ele].age}
          onChange={(event) => changeage(ele, event)}
          required
        />
        <button onClick={() => deleteform(ele)}>remove this form</button>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={submitform}>
        {Object.keys(formdata).map((ele) => {
          return returnform(ele);
        })}

        <button type="submit">SUBMITDATA</button>
      </form>
      <button onClick={addformcalled}>Add Form</button>
    </div>
  );
};

export default Dynamicform;
