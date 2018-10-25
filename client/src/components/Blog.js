import React, { Component } from "react";

class Blog extends Component {
  render() {
    const h2 = {
      fontSize: "8vw"
    };
    const p = {
      fontSize: "2.6vw"
    };
    return (
      <div>
        <h2 style={h2}>HELLO</h2>
        <p style={p}>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>

      </div>
    );
  }
}

export default Blog;
