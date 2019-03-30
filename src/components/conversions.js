import React, { Component } from "react";

class Conversions extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeUnits('F')}>Fahrenheit</button>
                <button onClick={() => this.props.changeUnits('C')}>Celcius</button>
            </div >
        )
    }
}

export default Conversions;