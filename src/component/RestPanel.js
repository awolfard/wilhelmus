import React, { useRef, useState } from "react";
import "./RestPanel.css";
import axios from 'axios';

const RestPanel = (props) => {

    const employeeIdInput = useRef(null);
    const [employee, setEmployee] = useState();

    const getEmployee = async(event) => {
        const url = employeeIdInput.current.value.trim() === "" ? "http://dummy.restapiexample.com/api/v1/employees" : "http://dummy.restapiexample.com/api/v1/employee/" + employeeIdInput.current.value;
        const response = await axios.get(url);
        setEmployee(JSON.stringify(response.data, null, 2));
    };

    return (
        <div className="rest-panel">
            <div className="request">
                <span className="label">Employee id</span>
                <input ref={employeeIdInput} type="text" name="employee-id" />
                <input type="button" value="Opvragen" onClick={getEmployee}></input>
            </div>
            <div className="response">
                <span>Employee:</span>
                <textarea cols="150" rows="15" value={employee}>
                </textarea>
            </div>
        </div>
    )

};

export default RestPanel;