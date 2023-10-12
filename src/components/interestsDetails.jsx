import React from 'react';
const InterestInfo = (props)=>{
    return(
        <div className="InterestInfo">
            <h2>Interest Sections</h2>
            <ul>
                {props.InterestInfo.map((interests)=>
                   (
                   <li key={interests}>{interests}</li>
                   )
                )}
            </ul>
        </div>
    );
};
export default InterestInfo;