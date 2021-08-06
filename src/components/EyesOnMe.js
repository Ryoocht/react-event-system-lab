import React, { Component } from "react";

class EyesOnMe extends Component {

    focusEvent = () => {
        console.log("Good!");
    }

    blurEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <div>
                <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
            </div>
        )
    }

}

export default EyesOnMe