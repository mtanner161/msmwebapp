import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Data from "../testData.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Datagrid() {
  const data = Data;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "oil", headerName: "Oil", width: 150 },
    { field: "coal", headerName: "Coal", width: 150 },
    { field: "coalccs", headerName: "Coal CCUS", width: 150 },
    { field: "naturalgas", headerName: "Natural Gas", width: 150 },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    year: row.year,
    oil: row.oil,
    coal: row.coal,
    coalccs: row.coalccs,
    naturalgas: row.naturalgas,
  }));

  console.log(data);

  return (
    <div style={{ height: 750, width: "100%", color: "white" }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "white",
          color: "white",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        pagination
      />
    </div>
  );
}

export default Datagrid;
