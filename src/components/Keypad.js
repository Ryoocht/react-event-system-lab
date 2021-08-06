import React, { Component } from "react";

class Keypad extends Component {

    emptyPwd = () => {
        console.log("Entering password...");
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.emptyPwd}></input>
            </div>
        )
    }
}

export default Keypad