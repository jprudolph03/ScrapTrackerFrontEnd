import React from "react";

function LotList(props) {
  console.log(props.lots);
  let cList = props.lots;
  const makeList = cList.map((i) => (
    <tr key={i._id}>
      <th>{i.num}</th>
      <th>{i.totalCoilWeight}</th>
      <th>XXX</th>
      <th>XXX</th>
    </tr>
  ));
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Total Coil Weight</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{makeList}</tbody>
      </table>
    </div>
  );
}

export default LotList;
