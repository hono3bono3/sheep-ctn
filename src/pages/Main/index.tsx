// import React, { useState, ChangeEvent } from "react";

// export const Main = () => {
//   return <div>hogehoge</div>;
// };

import React from "react";
import { Circle } from "../../components/Circle";
import Board from "../../components/Board";

export const Main = () => {
  return (
    <>
      <p>Hello World!</p>
      <Board sketch={Circle} />
    </>
  );
};
