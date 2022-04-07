// eslint-disable-next-line no-unused-vars
const initialstate=0


const changethenumber = (state = initialstate, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state
};

export default changethenumber

