import React from 'react';
const PersonalInfo= (props)=>{
    return(
        <div className="Personal-Details">
            <h2>BioData of {props.name}</h2>
            <ul>
                <li><span><b>Your Name: </b></span>{props.name}</li>
                <li><span><b>Your Address: </b></span>{props.address}</li>
                <li><span><b>Your E-mail: </b></span>{props.mail}</li>
                <li><span><b>Your Phone: </b></span>{props.phone}</li>
                <li><span><b>Blood Group: </b></span>{props.bdG}</li>
                <li><span><b>Your Age: </b></span>{props.age}</li>
                <li><span><b>Gender: </b></span>{props.gender}</li>
                <li><span><b>Country: </b></span>{props.country}</li>
            </ul>
        </div>
    );
};
export default PersonalInfo;