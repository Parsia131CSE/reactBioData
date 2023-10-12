import React from 'react';
const Curriculam = (props)=>{
    return(
        <div className="curriculam">
            <h2>Curriculum Activities</h2>
            <ul>
                {props.curriculam.map((activities)=>
                   (
                   <li key={activities}>{activities}</li>
                   )
                )}
            </ul>
        </div>
    );
};
export default Curriculam;