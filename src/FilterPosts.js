import React from "react";

const FilterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    return post.includes(query);
  });
};

export default FilterPosts;
