import { useState } from "react";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => prevState.items.concat(prevState.items.length + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) =>
      prevState.items.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <li
      key={index}
      className="ListItem"
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};

export default List;
