import React from "react";
import { CSSTransition, Transition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 300,
  exit: 1000,
};

const Modal = (props) => {
  return (
    // Method 1: We can use Transition if we want to manually assign the classes as done below.
    /* <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition> */

    // Method 2: Use CSSTransition if you want the package to handle the CSS classes. Check the Modal.css file
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
