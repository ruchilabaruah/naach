import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevItems) => prevItems.concat(prevItems.length + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevItems) =>
      prevItems.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    /* Method 1: Un-animated list 
    <li
      key={index}
      className="ListItem"
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
    */

    /* Method 2: Animating the list items with say a fading feature */
    <CSSTransition key={index} classNames="fade" timeout={300}>
      <li className="ListItem" onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      {/* Method 1: Un-animated list */}
      {/* <ul className="List">{listItems}</ul> */}

      {/* Method 2: Animating the list items with say a fading feature */}
      <TransitionGroup component="ul" className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
