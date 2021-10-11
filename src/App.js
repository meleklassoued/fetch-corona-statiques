import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
    params: { country: "USA" },
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "50dfe8bbe6msha025a531747029dp119647jsn255a560e8e36",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={getData}>click Me please</button>
    </div>
  );
}

export default App;
