import React from "react";
import Buttons from "./Buttons";
import "./Buttons.css";

const Friend = (props) => {
  const { friend } = props;

  const deleteFriend = props.handleDelete;

  return (
    <div key={friend.id}>
      <section className="container">
        <img alt={friend.name} src={friend.image} />
        <div className="information">
          <h3>{friend.name}</h3>
          <p>{friend.age} years old</p>
        </div>
        <Buttons id={friend.id} handleDelete={deleteFriend} />
      </section>
    </div>
  );
};

export default Friend;
