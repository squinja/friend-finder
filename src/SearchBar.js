import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchChange, query }) => {
  return (
    <>
      <form action="/" method="get">
        <label htmlFor="friend-search">
          <span className="visually-hidden">Search friends</span>
        </label>
        <input
          type="text"
          id="friend-search"
          placeholder="Search friends"
          name="f"
          onChange={handleSearchChange}
          value={query}
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </>
  );
};

//   const filterPosts = (friends, query) => {
//     if (!query) {
//       return friends;
//     }

//     return friends.filter((friend) => {
//       const friendName = friend.toLowerCase();
//       return friendName.includes(query);
//     });
//   };

// class SearchBarOld extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { query: "", friends: props.friends };
//   }

//   onInputChange = (e) => {
//     e.preventDefault();
//     this.setState({ query: e.target.value });
//   };

//   filterPosts = (friends, query) => {
//     if (!query) {
//       return friends;
//     }

//     return friends.filter((friend) => {
//       const friendName = friend.toLowerCase();
//       return friendName.includes(query);
//     });
//   };

//   render() {
//     return (
//       <>
//         <form action="/" method="get">
//           <label htmlFor="friend-search">
//             <span className="visually-hidden">Search friends</span>
//           </label>
//           <input
//             type="text"
//             id="friend-search"
//             placeholder="Search friends"
//             name="f"
//             onChange={this.onInputChange}
//             value={this.state.query}
//           />
//           <button type="submit">Search</button>
//         </form>
//         {console.log(this.state.query)}
//       </>
//     );
//   }
// }

export default SearchBar;
