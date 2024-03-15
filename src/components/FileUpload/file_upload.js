
import '../../common/po_process.css';
import { Grid, Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';
import CheckTable from '../../common/Check_table';

const FileUpload = () => {
    const [file, setFile] = useState()
    const [rowData, setRowData] = useState(undefined);
    const [columnDefs, setColumnDefs] = useState([]);

   

    const getProperDataset = (responseData) => {
        var headerObjectsArray = [];
        var dataValuesArray = [];

        var data = responseData;

        var headers = data["headers"];
        var dataValues = data["data"];

        // For Headers
        for (var i = 0; i < headers.length; i++) {
            headerObjectsArray.push({ title: headers[i] });
        };

        // For Data
        for (var j = 0; j < dataValues.length; j++) {
            dataValuesArray.push(Object.values(dataValues[j]))
        };

        // For to make first index as ""
        for (var k = 0; k < dataValuesArray.length; k++) {
            dataValuesArray[k].splice(0, 0, "");
        };
        return [headerObjectsArray, dataValuesArray];
    };

    useEffect(() => {
        let url='';
        makeAPICall(url);
    }, []);

        const makeAPICall = (url) => {
            let formData = new FormData();
            let query = "SELECT IFNULL(TRIM(file_name), '') AS 'Name', IFNULL(CONVERT(file_size_bytes, CHAR), '0') AS 'Size (bytes)', IFNULL(TRIM(status), '') AS 'Status', IFNULL(TRIM(comments), '') AS 'Comments', upload_key, DATE_FORMAT(created_on, '%d-%m-%Y %H:%i:%s') AS 'Upload Time' FROM payments.file_uploads WHERE dept_type = '{user_dept_type}' AND entity_id = '{entity_id}' AND is_active = 1 ORDER BY id DESC LIMIT 30;";
            let queryProper = query.replaceAll('{user_dept_type}').replaceAll('{entity_id}');

            // Adding files to the formdata
            formData.append("query", queryProper);
            formData.append("object_type", "table");

            axios({

                // Endpoint to send files
                url: "http://localhost:8080/files",
                method: "GET",
                headers: {
                    // Add any auth token here
                    authorization: "your token comes here",
                },

                // Attaching the form data
                data: formData,
            })

            // Handle the response from backend here
            .then((responseData) => {
                console.log("Value generated successfully");
                if (responseData != "null") {
                    let properData = JSON.parse(responseData);
                    let headerObjectsArray = getProperDataset(properData)[0];
                    let dataValuesArray = getProperDataset(properData)[1];
                };
            })
            // Catch errors if any
            .catch((err) => {
                console.log("Error Occured in generating Invoice Data");
            });
         
        };

    function handleFileChange(event) {
        setFile(event.target.files[0])
    };

    const handleUploadClick = (file) => {
        if (!file) {
            return;
        }

        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: file,
            
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`, 
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };
return (
    <div className="side" style={{ padding: "10px" }}>
        <Grid columns='equal'>
            <Grid.Row style={{ backgroundColor: "#e9e8d9", borderRadius: "14px", marginTop: "10px", padding: '2.25rem', marginLeft:'0px', marginRight:'0px', display: 'flex' }}>
            <Grid.Column>
                <div>
                    <input type="file" onChange={handleFileChange} name="uploadFile" id="fileId"/>
                </div>
            </Grid.Column>
            <Grid.Column>
            <Button primary>Upload</Button>
            </Grid.Column>
                
            </Grid.Row>
            <Grid.Row style={{ backgroundColor: "#e9e8d9", borderRadius: "12px", marginTop: "10px", padding:'1em', marginLeft:'0px', marginRight:'0px', display:'grid' }}>
                <CheckTable/>
                <Button onClick={handleUploadClick}>
                    View
                </Button>
            </Grid.Row>
        </Grid>
        
    </div>
);

}


export default FileUpload;