import React, { ChangeEvent, useEffect, useState } from "react";
// @ts-ignore
import isEven from "is-even";

import { Button } from "../ui/button";

export const CheckEven = () => {
  const [number, setNumber] = useState(0);
  const [numberIsEven, setNumberIsEven] = useState<number | undefined>();
  const [updateCount, setUpdateCount] = useState(0);

  const updateNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const checkNumber = () => {
    setNumberIsEven(isEven(number));
  };

  useEffect(() => {
    setUpdateCount((prevCount) => prevCount + 1);
  }, [number]);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>Count: {updateCount}</div>

      <input
        data-testid="number-input"
        type="number"
        value={number}
        onChange={updateNumber}
      />

      <div style={{ marginTop: "16px" }}>
        <Button onClick={checkNumber}>Check</Button>
      </div>

      {numberIsEven !== undefined && (
        <div>Given number is {numberIsEven ? "Even" : "Odd"}</div>
      )}
    </div>
  );
};
