import React from "react";
import QCard from "../template/Card";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => <QCard key={item.id} que={item} />)}
    </>
  );
}

export default Items;
