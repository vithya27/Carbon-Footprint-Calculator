import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

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
        body: `{"legs": [{ "from": "${activity[0].from}","to":  "${activity[0].to}","passengers": 1,"class": "economy"}]}`,
      });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      setReturns([
        {
          from: activity[0].from,
          to: activity[0].to,
          co2e: data.co2e,
          unit: data.co2e_unit,
        },
        ...returns,
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const url = "https://beta3.api.climatiq.io/travel/flights";
    fetchPost(url);
  }, [activity]);
  console.log(returns);

  return (
    <div className="app">
      <Form onSave={handleFormData} />
      <Table returns={returns} />
    </div>
  );
};

export default Calculator;
