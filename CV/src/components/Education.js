import React, { useState } from 'react';
import uniqid from 'uniqid';


function SectionHeading(props) {
    return (
      <div className="section-heading">
        <h3>{props.title}</h3>
      </div>
    );
  }

function EduExpForm(props) {
    const initialState = {
      school: '',
      dateAttended: '',
      studyField: '',
      location: '',
      degree: '',
      id: uniqid(),
    };
  
    const [eduInfo, setInfo] = useState(initialState);
  
    const resetState = () => {
      setInfo(initialState);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInfo((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.saveEdu(eduInfo);
      resetState();
    };
  
    if (!props.displayForm) return null;
    return (
      <div className="modal-container">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="school">School</label>
            <input
              onChange={handleChange}
              type="text"
              name="school"
              id="schoolInput"
              value={eduInfo.school}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateAttended">
              Date Attended <span>(MM/YYYY - MM/YYYY)</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="dateAttended"
              id="dateAttended-input"
              value={eduInfo.dateAttended}
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <div className="select-container">
              <select
                name="degree"
                id="degree-input"
                onChange={handleChange}
                value={eduInfo.degree}
              >
                <option>None</option>
                <option>High school or equivalent</option>
                <option>Associate</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>Doctorate</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="studyField">Field of study</label>
            <input
              onChange={handleChange}
              type="text"
              name="studyField"
              id="studyField-input"
              value={eduInfo.studyField}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">
              Location <span>(e.g. Los Angeles, CA)</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="location"
              id="schoolLocation-input"
              value={eduInfo.location}
            />
          </div>
  
          <div className="modal-action-btns">
            <input type="submit" value="Save" className="save-info-btn" />
            <button className="close-form-btn" onClick={props.handleDisplay}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
  


function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={props.deleteEdu.bind(this, id)}>
        X
      </button>
    </div>
  );
}

function DisplayEdu(props) {
  const { eduHist } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{eduHist.school}</h4>
      <p className="sub-info">{eduHist.degree}</p>
      <p className="sub-info">{eduHist.studyField}</p>
      <p className="sub-info">{eduHist.location}</p>
      <p className="date-info">{eduHist.dateAttended}</p>
      <DeleteBtn id={eduHist.id} deleteEdu={props.deleteEdu} />
    </div>
  );
}


function OpenModalBtn(props) {
    return (
      <div className="modal-btn-container">
        <button className="open-modal-btn" onClick={props.handleDisplay}>+ Add {props.title}</button>
      </div>
    );
  }

function Education() {
  const [displayForm, setDisplay] = useState(false);
  let [edu, addEduInfo] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveEdu = (eduInfo) => {
    const newEduInfo = [...edu, eduInfo];
    addEduInfo(newEduInfo);
    handleDisplay();
  };

  const deleteEdu = (id) => {
    const newEduInfo = [...edu];
    newEduInfo.splice(id, 1);
    addEduInfo(newEduInfo);
  };

  return (
    <>
      <SectionHeading title="Education" />

      {edu.map((eduHist) => (
        <DisplayEdu eduHist={eduHist} key={eduHist.id} deleteEdu={deleteEdu} />
      ))}
      <EduExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <OpenModalBtn title="Education" handleDisplay={handleDisplay} />
    </>
  );
}

export default Education;