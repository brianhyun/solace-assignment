"use client";

import { useEffect, useState } from "react";

import Input from "@/components/form/input";
import { SecondaryButton } from "@/components/form/button";

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
        advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
    document.getElementById("search-term").innerHTML = "";
    document.getElementById("search-term").value = "";
  };

  return (
    <div className="bg-slate-50 bg-opacity-25">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-medium text-gray-800">Solace Advocates</h1>
        <br />
        <div className="flex items-stretch gap-2 mt-2">
          <Input onChange={onChange} />
          <SecondaryButton onClick={onClick}>Reset</SecondaryButton>
        </div>
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
    </div>
  );
}