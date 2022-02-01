import React from "react";

function AddLotForm(props) {
  return (
    <div>
      <form onSubmit={props.handleClick}>
        <div className="mb-3">
          <label className="form-label">Add New Lot</label>
          <input type="number" className="form-control" />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLotForm;
