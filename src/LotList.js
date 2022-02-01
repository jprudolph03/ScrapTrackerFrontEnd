import React from "react";

function LotList(props) {
  let cList = props.lots;
  console.log(cList);
  const makeList = cList.map((i) => (
    <tr key={i._id}>
      <th>{i.num}</th>
      <th>
        {i.totalCoilWeight}
        <strong> ({i.totalCoilWeight - i.STDLoss})</strong>
      </th>
      <th>{((i.totalCoilWeight - i.STDLoss) / i.singlePartWeight) * 1000}</th>
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
            <th scope="col">Expected</th>
            <th scope="col">SP Weight</th>
          </tr>
        </thead>
        <tbody>{makeList}</tbody>
      </table>
    </div>
  );
}

export default LotList;
