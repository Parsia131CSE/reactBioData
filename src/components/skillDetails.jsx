import React from 'react';
const skillsInfo = (props)=>{
    return(
        <div className="SkillsInfo">
            <h2>Skills Section</h2>
            <ul>
                {props.SkillsInfo.map((skills)=>
                   (
                   <li key={skills}>{skills}</li>
                   )
                )}
            </ul>
        </div>
    );
};
export default skillsInfo;