import React, { Component } from "react";
import Media from "react-media";

class Chat extends Component {
  render() {
    return (
      <div>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <p>The document is less than 600px wide.</p>
            ) : (
              <p>The document is at least 600px wide.</p>
            )
          }
        </Media>

        {/* Will only render if conditions are met  */}
        <Media
          query="(max-width: 599px)"
          render={() => <p>The document is less than 600px wide.</p>}
        />
      </div>
    );
  }
}

export default Chat;
