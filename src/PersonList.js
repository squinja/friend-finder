import "./PersonList.css";
import Friend from "./Friend";
import React from "react";

const PersonList = (props) => {
  const { friend } = props;
  const deleteFriend = props.handleDelete;

  return friend.map((item) => {
    return (
      <>
        <Friend friend={item} handleDelete={deleteFriend} />
      </>
    );
  });
};

export default PersonList;
