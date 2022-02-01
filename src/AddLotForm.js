import React from "react";

function AddLotForm(props) {
  return (
    <div>
      <form onSubmit={props.handleClick}>
        <div className="mb-3">
          <label className="form-label">New Lot Number</label>
          <input type="number" className="form-control" />
          <label className="form-label">Total Coil Weight</label>
          <input type="number" className="form-control" />
          <label className="form-label">STD Loss</label>
          <input type="number" className="form-control" />
          <label className="form-label">Single Part Weight</label>
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
