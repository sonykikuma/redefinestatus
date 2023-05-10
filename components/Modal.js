import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');
function MyModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function search(string) {
    typeof window !== "undefined" && window.find(string);
  }
  //const a1 = document.getElementById("search").value;
  return (
    <div>
      <button onClick={openModal}>Search</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Search anything here..</h2>
        <form>
          <input placeholder="Search" type="text" id="search" />
          <input type="button " value="Go" onClick={search()} />
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default MyModal;
