
import React from "react";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default ({ results }) => (
    
  <>
  <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {results.map(gif => (
        <a href={gif.url} 
        target="_blank"
        rel="noopener noreferrer"
        key={gif.id}>
          <img
            src={gif.media[0].gif.url}
            alt={gif.name}
            
            
            className="item"
          />
        </a>
      ))}
  </Masonry>
  </>


);
// git change please