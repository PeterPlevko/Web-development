import React, { useState } from 'react';
import uniqid from 'uniqid';

function WorkExpForm(props) {
  const initialState = {
    jobTitle: '',
    employer: '',
    dateWorked: '',
    location: '',
    description: '',
    id: uniqid()
  };

  const [workInfo, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveWork(workInfo);
    resetState();
  };


  return (
    <div className="modal-container">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="job-input"
            value={workInfo.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employer">Company</label>
          <input
            type="text"
            name="employer"
            id="employer-input"
            value={workInfo.employer}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateWorked">
            Date Worked <span>(MM/YYYY - MM/YYYY)</span>
          </label>
          <input
            type="text"
            name="dateWorked"
            id="date-Input"
            value={workInfo.dateWorked}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location <span>(e.g. Los Angeles, CA)</span>
          </label>
          <input
            type="text"
            name="location"
            id="workLocation-input"
            value={workInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="job-desc"
            placeholder="Tasks will re-format into bulletpoints on save"
            value={workInfo.description}
            onChange={handleChange}
          ></textarea>
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

export default WorkExpForm;