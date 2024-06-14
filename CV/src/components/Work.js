import WorkExpForm from "./WorkExpForm";
import React, { useState } from 'react';
import DisplayWorkExp from './DisplayWorkExp';


function OpenModalBtn(props) {
    return (
      <div className="modal-btn-container">
        <button className="open-modal-btn" onClick={props.handleDisplay}>+ Add {props.title}</button>
      </div>
    );
  }
  
function Work(){

    const [displayForm, setDisplay] = useState(false);
    let [workExp, addWorkExp] = useState([]);

    const handleDisplay = () => {
        setDisplay(!displayForm);
      };
    
      const saveWork = (workInfo) => {
        const newWorkExp = [...workExp, workInfo];
        addWorkExp(newWorkExp);
        handleDisplay();
      };
    
      const deleteHist = (id) => {
        const newWorkExp = [...workExp];
        newWorkExp.splice(id, 1);
        addWorkExp(newWorkExp);
      };



    function SectionHeading(props) {
        return (
          <div className="section-heading">
            <h3>{props.title}</h3>
          </div>
        );
      }


      return (
        <>
          <SectionHeading title="Work Experience" />
          
          {workExp.map((workHist) => (
            <DisplayWorkExp
              workHist={workHist}
              key={workHist.id}
              deleteHist={deleteHist}
            />
          ))}
            {displayForm?      
            <WorkExpForm
            displayForm={displayForm}
            handleDisplay={handleDisplay}
            saveWork={saveWork}
          />:null}


          <OpenModalBtn title="Work Experience" handleDisplay={handleDisplay} />
        </>
      );
    }

export default Work;