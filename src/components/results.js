
import React from "react";


export default ({ results }) => (
    
  <>
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

  </>


);
// git change please