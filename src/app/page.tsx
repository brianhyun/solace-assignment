"use client";

import { useEffect, useState } from "react";

import Table from "@/components/table/table";
import TableHead from "@/components/table/head";  
import TableBody from "@/components/table/body";
import TableDataCell from "@/components/table/data-cell";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e) => {
    const searchTerm = e.target.value;

    document.getElementById("search-term").innerHTML = searchTerm;

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: "1px solid black" }} onChange={onChange} />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <Table>
        <TableHead headers={[
          "First Name",
          "Last Name",
          "City",
          "Degree",
          "Specialties",
          "Years of Experience",
          "Phone Number"
        ]} />
        <TableBody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr>
                <TableDataCell>{advocate.firstName}</TableDataCell>
                <TableDataCell>{advocate.lastName}</TableDataCell>
                <TableDataCell>{advocate.city}</TableDataCell>
                <TableDataCell>{advocate.degree}</TableDataCell>
                <TableDataCell>
                  {advocate.specialties.map((s) => (
                    <div>{s}</div>
                  ))}
                </TableDataCell>
                <TableDataCell>{advocate.yearsOfExperience}</TableDataCell>
                <TableDataCell>{advocate.phoneNumber}</TableDataCell>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}