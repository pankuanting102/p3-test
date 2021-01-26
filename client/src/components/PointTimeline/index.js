import React from 'react'
import ProgressBar from 'bootstrap-progress-bar';

function PointTimeline(props) {
    return (
        <div>
            <ProgressBar now={props.user.highScore + 10} />
        </div>
        
    )
};


export default PointTimeline;