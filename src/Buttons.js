import React from "react";
import "./Buttons.css";

const Buttons = ({ id, handleDelete }) => {
  return (
    <div className="add-delete-buttons">
      <button>Add</button>
      <button
        onClick={(e) => {
          handleDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
