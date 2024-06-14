import React from 'react';

function FormatDesc(props) {
  const { desc } = props;
  if ( desc === '') return '';
  return (
    <ul className="work-desc-list">

      {desc.split('\n').map((bulletPoint) => {
        return <li>{bulletPoint}</li>;
      })}
    </ul>
  );
}

function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={props.deleteHist.bind(this, id)}>
        X
      </button>
    </div>
  );
}

function DisplayWorkExp(props) {
  const { workHist, id } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{workHist.jobTitle}</h4>
      <p className="date-info">{workHist.dateWorked}</p>
      <p className="sub-info">{workHist.employer}</p>
      <p className="sub-info">{workHist.location}</p>
      <div className="formatted-list">
        <FormatDesc desc={workHist.description} />
      </div>
      <DeleteBtn id={id} deleteHist={props.deleteHist} />
    </div>
  );
}

export default DisplayWorkExp;