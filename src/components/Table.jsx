import React from "react";

const Table = (props) => {
  const history = props.returns.map((d, index) => {
    return (
      <tr key={index}>
        <td>{d.activity}</td>
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
                <th scope="col">Activity</th>
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
          <img
            className="card-img-top"
            src="https://cdn.shopify.com/s/files/1/0326/7189/products/mexicon-monarchs-ptwtnm_300x.jpg?v=1657136033
"
            alt="Plant a tree"
          />
          <div className="card-body">
            <h5 className="card-text">
              You have to plant <b>xx</b> trees to offset xx kg of CO2E
            </h5>
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
