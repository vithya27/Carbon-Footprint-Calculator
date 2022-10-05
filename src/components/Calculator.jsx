import React, { useState, useEffect } from "react";
import Form from "./Form";
import Summary from "./Summary";
import Graph from "./Graph";

const Calculator = () => {
  const [activity, setActivity] = useState([]);
  const [returns, setReturns] = useState([]);
  const [error, setError] = useState(null);

  const handleFormData = (newActivity) => {
    setActivity([newActivity, ...activity]);
  };

  const fetchPost = async (url) => {
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer ",
        },
        body: `{"legs": [{ "from": "${activity[0].from.toUpperCase()}","to":  "${activity[0].to.toUpperCase()}","passengers": 1,"class": "economy"}]}`,
      });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      setReturns([
        {
          from: activity[0].from.toUpperCase(),
          to: activity[0].to.toUpperCase(),
          co2e: data.co2e,
          unit: data.co2e_unit,
        },
        ...returns,
      ]);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      if (
        err.message !== "Cannot read properties of undefined (reading 'from')"
      ) {
        return alert(err.message);
      }
    }
  };

  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/travel/flights";
    fetchPost(url);
  }, [activity]);

  return (
    <div className="container">
      <Form onSave={handleFormData} />

      <h2 className="graphTitle">Carbon Emissions History</h2>
      <div className="row">
        <div className="col-sm-8">
          <Graph returns={returns} />
        </div>
        <div className="col-sm-4">
          <Summary returns={returns} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
