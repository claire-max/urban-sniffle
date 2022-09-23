console.log("test");
const api_key = '64UCg0cOl2eGLzA5ONgaFXj9giFD5FbZOKVQr6Ii'
// Free API key for use in demo

var getFuelStation = function (zip) {
    var apiUrl = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=' + api_key + '&limit=25&zip=' + zip.toString();
  // For the purpose of this demo we limited the number of results to 25

    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            //Using the .json method to convert the JSON data from the NREL API to JavaScript that we can work with

            let placeholder = document.querySelector("#data-output");
            //Getting access to the HTML table's body element. This element will be stored in a JS variable named placeholder

            let out = "";
            //At the end of the script, the variable out will hold all the station information relevant to the query

            for (let element of data.fuel_stations){
            // A for-of function will loop through the array and get access to each station

            // Inside the loop we will append every station to the out variable. By using backquotes instead of quotes below we can write regular HTML inside them. This way we create a table row element and add the desired columns to the output
            out += `
            <tr>
                <td>${element.station_name}</td>
                <td>${element.street_address}</td>
                <td>${element.city}</td>
                <td>${element.state}</td>
                <td>${element.zip}</td>
                <td>${element.fuel_type_code}</td>
            </tr>

            `;
          }

          placeholder.innerHTML = out;
          //Lastly we populate the table's body element with our stations
          });
        
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to NREL');
      });
  };

  getFuelStation(11215);
  