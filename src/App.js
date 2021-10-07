import { Fragment, useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onCloseHandler = () => {
    setModalOpen(false);
  };
  const onOpenModalHandler = () => {
    setModalOpen(true);
  };
  return (
    <div className="App">
      <h1>React Animations</h1>
      {/* Timeout is the time between 'entering' and 'entered', 'exiting' and 'exited'. It can be just a number,
      same like the time mentioned in CSS animation. If you want to add define different timings for entering and 
      exiting, then create an object like above 'animationTiming'. Lifecycle hooks like onEnter, onEntering etc are
      also attached to this, which we can use for customization. */}
      {/* Method 1: */}
      {/* <Transition
        in={modalOpen}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div>
              <Modal show={state} closed={onCloseHandler} />
            </div>
          );
        }}
      </Transition> */}
      {/* Method 2: We can also directly use Transition inside Modal.js file and convert it into a transition component */}
      <Modal show={modalOpen} closed={onCloseHandler} />
      {modalOpen && <Backdrop />}
      <button className="Button" onClick={onOpenModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
