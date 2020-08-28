import React from 'react';

const Symptom = (props) => {
  return (
    <div className="symptom">
      <div>{props.label}</div>
      <div>
        <label>
          <input
            type="radio"
            name={props.name}
            value="Yes"
            checked={props.currentState === "Yes"}
            onChange={props.onInputChange}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            name={props.name}
            checked={props.currentState === "No"}
            onChange={props.onInputChange}
          />
          No
        </label>
      </div>
    </div>
  )
}

export default Symptom;