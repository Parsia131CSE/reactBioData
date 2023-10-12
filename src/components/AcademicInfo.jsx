import React from 'react';

const AcademicInfo = (props) => {
  const academicData = props.academicInfo;
  if(!Array.isArray(academicData)){
    console.error('Invalid academic data recieved');
    return null;
  }
  const academicEntries = academicData.map((entry,index)=>(
    <li key={index}>
      <div className="institution"><b>Institution Name:</b> {entry.institution}</div>
      <div className="year"><b>Passing Year:</b> {entry.year}</div>
    </li>
  )
  );
  return (
    <div className="academicInfo">
      <h2>Academic Information</h2>
      <ul>
        {academicEntries}
      </ul>
    </div>
  );
};

export default AcademicInfo;

/* <ol><b>Bachelor Degree: </b>
            <ul ><span><b>Institution:</b></span>{props.inst}</ul>
            <ul><span><b>Passing Year:</b></span>{props.passY}</ul>
            </ol>
            <ol><b>H.S.C: </b>
            <ul><span><b>Institution:</b></span>{props.inst1}</ul>
            <ul><span><b>Passing Year:</b></span>{props.passY1}</ul>
            </ol>
            <ol><b>S.S.C: </b>
            <ul><span><b>Institution:</b></span>{props.inst2}</ul>
            <ul><span><b>Passing Year:</b></span>{props.passY2}</ul>
            </ol> */