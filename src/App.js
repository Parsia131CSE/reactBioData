import PersonalInfo from "./components/PersonalInfo";
import AcademicInfo from "./components/AcademicInfo";
import SkillsInfo from "./components/skillDetails"; // Corrected the case
import InterestInfo from "./components/interestsDetails"; // Corrected the case
import Curriculam from "./components/Curricular";
import { info } from './personsdata/info';



function App() {
  var count=0;
  return (
    <div className="App">
      <h1>Bio-Data</h1>

      {
        info.map(information=>{
          const academicInfoData=info[count].academicInfoData;
          count++;
          return (
            <div key={information.name}>
              <PersonalInfo
                name={information.name}
                address={information.address}
                mail={information.mail}
                phone={information.phone}
                bdG={information.bdG}
                age={information.age}
                gender={information.gender}
                country={information.country}
              />
              <AcademicInfo
                academicInfo={academicInfoData}
              />
              <SkillsInfo
                SkillsInfo={information.SkillsInfo}
              />
              <InterestInfo
                InterestInfo={information.InterestInfo}
              />
              <Curriculam
                curriculam={information.curriculam}
              />
            </div>
          );

        })
      }  
        
      
    </div>
  );
}

export default App;
