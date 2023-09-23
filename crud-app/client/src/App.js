import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState(0);
  const [wage, setWage] = useState();

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      //body object
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <h2>Students Managing System</h2>
        <lablel>Name</lablel>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <lablel>Age</lablel>
        <input
          type="text"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <lablel>Grade</lablel>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <lablel>Major</lablel>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <lablel> GPA </lablel>
        <input
          type="text"
          onChange={(e) => {
            setWage(e.target.value);
          }}
        />
        <button onClick={addEmployee}> Add student</button>
      </div>
      <p>
        <hr></hr>
      </p>
      <div className="employees">
        <button onClick={getEmployees}> show student</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              {" "}
              <h3>Name: {val.name} </h3>
              <h3>Age: {val.age} </h3>
              <h3>Country: {val.country} </h3>
              <h3>Position: {val.position} </h3>
              <h3>Wage: {val.wage} </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
