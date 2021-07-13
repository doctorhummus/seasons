import React from 'react';

const seasonConfig = {
    summer: {
        test: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName} = seasonConfig[season]; 
    
    const seasonText = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'; 
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{ seasonText }</h1>
            <i className={`${iconName} icon`} />
        </div>
    ) 
}

export default SeasonDisplay;