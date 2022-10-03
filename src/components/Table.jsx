import React from "react";
import { useState } from "react";
import carbonData from "./mockdata";

const Table = (props) => {
  let CO2E = props.activity.map((d, index) => {
    return <td key={index}>{parseInt(d.co2e, 10)}</td>;
  });
  let numberOfTrees = props.activity.map((d, index) => {
    return <td key={index}>{parseInt(d.co2e / 26, 10)}</td>;
  });

  return (
    <div className="container">
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
            <tr>
              <td>{props.activity.activity}</td>

              {CO2E}
              {numberOfTrees}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
