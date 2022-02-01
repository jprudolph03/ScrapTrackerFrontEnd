import React from "react";

function LotList(props) {
  let cList = props.lots;
  const makeList = cList.map((i) => (
    <tr key={i._id}>
      <th>{i.num}</th>
      <th>{i.totalCoilWeight}</th>
      <th>{i.STDLoss}</th>
      <th>{i.singlePartWeight}</th>
    </tr>
  ));
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Total Coil Weight</th>
            <th scope="col">STD Loss</th>
            <th scope="col">SP Weight</th>
          </tr>
        </thead>
        <tbody>{makeList}</tbody>
      </table>
    </div>
  );
}

export default LotList;
