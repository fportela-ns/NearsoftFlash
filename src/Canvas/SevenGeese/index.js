import React from "react";

class SevenGeese extends React.Component {
  openConfig() {}

  render() {
    return (
      <div className="canvas-geese" onClick={this.openConfig}>
        Seven Geese
      </div>
    );
  }
}

export default SevenGeese;
