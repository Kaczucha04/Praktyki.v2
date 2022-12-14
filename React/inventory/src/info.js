import React from "react";

class Info extends React.Components {
    render() {
        const title = "This is my title";
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