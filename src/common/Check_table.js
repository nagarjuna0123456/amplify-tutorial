import React, { useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';


const GridComponent = () => {
  const [gridApi, setGridApi] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onSelectionChanged = () => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectedRows(selectedData);
  };

  const handleCleanClick = () => {
    gridApi.deselectAll();
    setSelectedRows([]);
  };

  const handleResponseClick = () => {
    console.log(selectedRows);
  };

  const columnDefs = [
    {
      field: "id",
      headerName: "ID",
      sortable: true,
      filter: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      resizable: true
    },
    {
      field: "name",
      headerName: "Name",
      sortable: true,
      filter: true,
      resizable: true
    },
    {
      field: "age",
      headerName: "Age",
      sortable: true,
      filter: true,
      resizable: true
    },
    {
      field: "country",
      headerName: "Country",
      sortable: true,
      filter: true,
      resizable: true
    },
  ];

  const rowData = [
    { id: 1, name: "John Doe", age: 25, country: "USA" },
    { id: 2, name: "Jane Smith", age: 32, country: "Canada" },
    { id: 3, name: "Mark Johnson", age: 28, country: "Australia" },
    { id: 4, name: "Lucy Brown", age: 22, country: "UK" },
    { id: 5, name: "Michael Lee", age: 30, country: "Japan" },
    { id: 6, name: "Emma Wilson", age: 35, country: "Germany" },
    { id: 7, name: "John Doe", age: 25, country: "USA" },
    { id: 8, name: "Jane Smith", age: 32, country: "Canada" },
    { id: 9, name: "Mark Johnson", age: 28, country: "Australia" },
    { id: 10, name: "Lucy Brown", age: 22, country: "UK" },
    { id: 11, name: "Michael Lee", age: 30, country: "Japan" },
    { id: 12, name: "Emma Wilson", age: 35, country: "Germany" },
  ];

  return (
    <div>
      <div
        className="ag-theme-balham" 
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
          onGridReady={onGridReady}
          onSelectionChanged={onSelectionChanged}
          
        ></AgGridReact>
      </div>
      
    </div>
  );
};

export default GridComponent;