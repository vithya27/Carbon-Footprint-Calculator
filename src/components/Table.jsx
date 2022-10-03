import React from "react";

const Table = (props) => {
  let activity = props.activity.map((d, index) => {
    return (
      <tr key={index}>
        <td>{d.activity}</td>
        <td>{d.from}</td>
        <td>{d.to}</td>
      </tr>
    );
  });

  // let CO2E = props.data.map((d, index) => {
  //   return <td key={index}>{parseInt(d.co2e, 10)}</td>;
  // });
  // let numberOfTrees = props.data.map((d, index) => {
  //   return <td key={index}>{parseInt(d.co2e / 26, 10)}</td>;
  // });

  return (
    <div className="container">
      <header>
        <center>
          <h2>Carbon Emissions History</h2>
        </center>
      </header>
      <div className="table-responsive-sm">
        <table className="table table-bordered">
          <thead>
            <tr className="bg-success">
              <th scope="col">Activity</th>
              <th scope="col">Amount of CO2E emitted</th>
              <th scope="col">Number of trees you need to plant</th>
            </tr>
          </thead>
          <tbody>
            {activity}
            {/* {CO2E}
              {numberOfTrees} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
