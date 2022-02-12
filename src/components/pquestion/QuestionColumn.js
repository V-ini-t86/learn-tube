import React from "react";
import QTabs from "./QTabs";

function QuestionColumn({currVid}) {
  return (
    <div>
      <QTabs currVid={currVid} />
    </div>
  );
}

export default QuestionColumn;
