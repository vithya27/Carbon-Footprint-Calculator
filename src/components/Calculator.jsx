import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

const Calculator = () => {
  const [activity, setActivity] = useState([]);

  const handleFormData = (newActivity) => {
    setActivity([newActivity, ...activity]);
  };

  const url = "https://beta3.api.climatiq.io/travel/flights";
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer ",
      },
      body: `{"legs": [{ "from": "BER","to":  "SIN","passengers": 1,"class": "economy"}]}`,
    });
    const data = await res.json();

    setData(data);
  }, [url]);

  return (
    <div className="app">
      <Form onSave={handleFormData} />
      <Table activity={activity} data={data} />
    </div>
  );
};

export default Calculator;
