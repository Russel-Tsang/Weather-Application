import React from 'react';

const Weather = (props) => {
    return (
        // display weather info
        <div>
            {props.country_name && props.city_name && <p>Location: {props.city_name} {props.country_name}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {/* if error message exists, display it */}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;