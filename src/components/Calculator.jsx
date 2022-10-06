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
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
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

<<<<<<< Updated upstream
=======
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // For Rail Travel
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const [railActivity, setRailActivity] = useState([]);
  const [railReturns, setRailReturns] = useState([]);
  const [railError, setRailError] = useState(null);

  const handleRailFormData = (newRailActivity) => {
    setRailActivity([newRailActivity, ...railActivity]);
  };

  const fetchRailPost = async (url) => {
    setRailError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer ",
        },
        body: `{"emission_factor": {"activity_id": "passenger_train-route_type_commuter_rail-fuel_source_na"},"parameters": {"passengers": 1,"distance": ${railActivity[0].distance},"distance_unit": "mi"}}`,
      });

      if (res.status !== 200) {
        throw new railError("Something went wrong.");
      }

      const railData = await res.json();
      setRailReturns([
        {
          distance: railActivity[0].distance,
          co2e: railData.co2e,
        },
        ...railReturns,
      ]);
    } catch (err) {
      setRailError(err.message);
      if (
        err.message !==
        "Cannot read properties of undefined (reading 'distance')"
      ) {
        return alert(err.message);
      }
    }
  };

  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/estimate";
    fetchRailPost(url);
  }, [railActivity]);

>>>>>>> Stashed changes
  return (
    <div className="container">
      <Form onSave={handleFormData} />

      <div className="graphTitleContainer">
        <h1 className="graphTitle">Carbon Emissions History</h1>
      </div>
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
