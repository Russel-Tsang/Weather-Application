import React, { Component } from "react";

class Conversions extends Component {
    render() {
        return (
            <div>
                <button
                    // onClick raises event from conversions.js => form.js => app.js, carrying argument of 'F'
                    onClick={() => this.props.setUnits('F')}
                    className='btn btn-light'
                >
                    Fahrenheit
                </button>
                <button
                    // onClick raises event from conversions.js => form.js => app.js , carrying argument of 'C'
                    onClick={() => this.props.setUnits('C')}
                    className='btn btn-light'
                >
                    Celcius
                </button>
            </div >
        )
    }
}

export default Conversions;