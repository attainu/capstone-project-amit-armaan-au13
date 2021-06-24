import React from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { PrettyPrintStat, sortData } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      //create a promise

      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const count = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2, //uk,usa,france
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(count);
          //countries frm line 17..this will change the countries variable in line7
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const URL =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(5);
      });
  };
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {/* loop through all the countries and show a drop down
            list of options */}
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}

              {/*< MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">abbbs</MenuItem>
            <MenuItem value="worldwide">uk</MenuItem>
            <MenuItem value="worldwide">yaahoo</MenuItem> */}
            </Select>
          </FormControl>
        </div>

        <div class="app__stats">
          <InfoBox
            onClick={() => setCasesType("cases")}
            title="coronavirus cases"
            cases={PrettyPrintStat(countryInfo.todayCases)}
            total={PrettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            onClick={() => setCasesType("recovered")}
            title="recovered"
            cases={PrettyPrintStat(countryInfo.todayRecovered)}
            total={PrettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            onClick={() => setCasesType("deaths")}
            title="deaths"
            cases={PrettyPrintStat(countryInfo.todayDeaths)}
            total={PrettyPrintStat(countryInfo.deaths)}
          />
        </div>
        <div>
          <Map
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
      </div>

      <Card app__right>
        <CardContent>
          <h3>Live Cases Country</h3>
          <Table countries={tableData} />
          <h3>World Wide new {casesType}</h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
