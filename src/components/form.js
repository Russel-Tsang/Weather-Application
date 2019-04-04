import React from 'react';
import Conversions from './conversions'

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather} className="form">
            <input type="text" name="city" placeholder="City:" className="m-4" />
            <input type="text" name="country" placeholder="Country:" className="m-4" />
            {/* raise event from form.js => app.js with argument of 'F' or 'C' from conversions.js */}
            <Conversions setUnits={props.setUnits} />
        </form>
    )
}

export default Form;