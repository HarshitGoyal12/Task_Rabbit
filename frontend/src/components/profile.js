import React from 'react'
function profile(){
    return (
        <div className="Profile">
          <h1 className="Name">{person.name}</h1>
          <p className="Bio">{person.biography}</p>
          <div className="Quote">
            <blockquote>&ldquo; {quote.content} &rdquo;</blockquote>
            <div className="byline">&mdash; {props.quote.source}</div>
          </div>
        </div>
      );
  }
  export default profile