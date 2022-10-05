import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const Table = (props) => {
  const history = props.returns.map((d, index) => {
    return (
      <tr key={index}>
        <td>
          {d.from} - {d.to}
        </td>
        <td>{parseInt(d.co2e, 10)}</td>
        <td>{parseInt(d.co2e / 26, 10)}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <header>
          <center>
            <h2 className="tableTitle">Carbon Emissions History</h2>
          </center>
        </header>
        <div className="table-responsive-sm">
          <table className="table table-bordered">
            <thead>
              <tr className="bg-success">
                <th scope="col">Flight Details</th>
                <th scope="col">Amount of CO2E emitted</th>
                <th scope="col">Number of trees you need to plant</th>
              </tr>
            </thead>
            <tbody>{history}</tbody>
          </table>
        </div>
        <br />

        <div className="card">
          <h3 className="card-header">Summary of Carbon Footprint</h3>

          <div className="card-body">
            <h4 className="card-text">
              You have to plant <b>xx</b> trees to offset xx kg of CO2E
            </h4>
            <a
              href="https://onetreeplanted.org/products/plant-trees"
              className="btn btn-success"
            >
              Offset your emissions by clicking here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
