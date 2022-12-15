import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
    render() {
        const title = this.props.title;
        const showtittle = true;

        if (showtittle) {
            return (
              <div>
                <h1>{showtittle ? title : ""}</h1>
                <p>Manage your stuff</p>
              </div>
            );
          } else {
            return <p>empty</p>
          }
    }
}

export default Info;