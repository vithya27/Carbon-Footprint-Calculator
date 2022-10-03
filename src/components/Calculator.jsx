import React, { useState } from "react";
import Form from "./Form";
import carbonData from "./mockdata";
import Table from "./Table";

const Calculator = () => {
  const [activity, setActivity] = useState(carbonData);

  const handleFormData = (newActivity) => {
    setActivity([newActivity, ...activity]);
  };
  return (
    <div className="app">
      <Form onClick={handleFormData} />
      <Table activity={activity} />
    </div>
  );
};

export default Calculator;
