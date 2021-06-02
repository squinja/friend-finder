import React from "react";
import friends from "./data/FriendsData";

class App extends React.Component {
  constructor() {
    this.state = {
      friends: [
        {
          name: "Greg",
          id: 0,
        },
        {
          name: "Emma",
          id: 1,
        },
        {
          name: "Amadeus",
          id: 2,
        },
      ],
    };
  }

  render() {
    handleDelete = (id) => {
      // Destructure friends from state
      const { friends } = this.state;

      //   Make a copy of the friends array so as to not mutate it
      arrOfFriends = [...friends];

      //   Make an array of just the IDs of each friend. [0, 1, 2]
      friendsIds = arrOfFriends.map((friend) => friend.id);

      //   Find the index of the Id that matches the id parameter put into this function.
      indexOfFriendToKill = friendsIds.indexOf(id);

      //   Use that index to remove that friend object from the original copied array of friends.
      arrOfFriends.splice(indexOfFriendToKill, 1);

      //   Set the friends state array to the new array that has that one friend object removed
      this.setState({ friends: arrOfFriends });
    };

    return (
      <div>
        {this.state.friends.map((friend) => (
          <h1 key={friend.id} onClick={() => handleDelete(friend.id)}>
            {friend.name}
          </h1>
        ))}
      </div>
    );
  }
}

// Alt to see it easier

<div>
  <div onClick={() => handleDelete(0)}>
    <h1>{this.state.friends[0].name}</h1>
  </div>

  <div onClick={() => handleDelete(1)}>
    <h1>{this.state.friends[1].name}</h1>
  </div>

  <div onClick={() => handleDelete(2)}>
    <h1>{this.state.friends[2].name}</h1>
  </div>
</div>;
