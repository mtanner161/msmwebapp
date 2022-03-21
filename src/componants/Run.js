import React from "react";
import Datagrid from "./Datagrid";
import "./Run.css";

const Run = () => {
  return (
    <div className="background">
      <h1 className="powerBi-container">Beyond Two Degree MSM Model Outputs</h1>
      <div className="powerBi-container">
        <iframe
          title="msm_output_twodegree"
          width="1000"
          height="600"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTdlNDQ2NWMtYjY0Zi00ZmNhLThjNTgtMjk0YmYyOTEzNDk4IiwidCI6IjA1MTM5NTUzLWVlOTAtNDdhZi1iNmY3LTU0ZDk2OTc4ZTQ5ZSJ9&pageName=ReportSection"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
      <h1 className="powerBi-container">Demand Data</h1>
      <div className="table-container">
        <Datagrid />
      </div>
    </div>
  );
};

export default Run;
