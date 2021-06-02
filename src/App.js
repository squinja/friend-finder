import "./App.css";
import React from "react";
import PersonList from "./PersonList";
import SearchBar from "./SearchBar";
import FriendsData from "./data/FriendsData";
import friends from "./data/FriendsData";

class App extends React.Component {
  state = {
    friends: FriendsData,
    query: "",
  };

  clearList() {
    this.setState({ friends: [] });
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  render() {
    const filteredFriends = this.state.friends.filter((friend) => {
      return friend.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    const filteredFriendsLength = filteredFriends.length;

    const deleteFriend = (id) => {
      const friendsArray = this.state.friends;
      const friendsIds = friendsArray.map((f) => f.id);

      const idString = id.toString();
      const indexOfFriendToDelete = friendsIds.indexOf(idString);
      if (indexOfFriendToDelete >= 0)
        friendsArray.splice(indexOfFriendToDelete, 1);

      this.setState({ friends: friendsArray });
    };

    return (
      <div className="bg-container">
        <h1>{filteredFriendsLength} Friends</h1>

        {/* #1: Create input directly in App */}
        <input
          placeholder="weee"
          value={this.query}
          onChange={(e) => {
            this.setState({ query: e.target.value });
          }}
        />
        {/* Way 2: Create input in separate component */}
        <SearchBar
          query={this.state.query}
          handleSearchChange={this.onInputChange}
        />
        <input
          type="button"
          value="delete greg"
          onClick={() => deleteFriend(1)}
        />
        <PersonList friend={filteredFriends} handleDelete={deleteFriend} />
      </div>
    );
  }
}

export default App;

// friendsDisplay() {
//   return (
//     <div>
//       {this.state.friends.map((fren) => {
//         return <Person key={fren.age} friend={fren} />;
//       })}
//     </div>
//   );
// }
