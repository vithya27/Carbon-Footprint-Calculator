import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Calculator = () => {
  const [activity, setActivity] = useState([
    { activity: "", from: "", to: "" },
  ]);

  const handleFormData = (newActivity) => {
    setActivity([newActivity, ...activity]);
  };
  return (
    <div className="app">
      <Form onSave={handleFormData} />
      <Table activity={activity} />
    </div>
  );
};

export default Calculator;
