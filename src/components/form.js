import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City: " />
            <input type="text" name="country" placeholder="Country: " />
            <button>Inform Me</button>
        </form>
    )
}

export default Form;