import { useState } from "react";
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
      {modalOpen && <Modal isOpen={modalOpen} closed={onCloseHandler} />}
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
