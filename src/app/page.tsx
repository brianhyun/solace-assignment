"use client";

import { useEffect, useState } from "react";

import { Advocate } from "@/types/advocate";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/advocates");
        const data = await response.json();
        setAdvocates(data.data);
        setFilteredAdvocates(data.data);
      } catch (error) {
        console.error("Error fetching advocates:", error);
      }
    };

    fetchData();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredAdvocates = advocates.filter((advocate) => {
      const advocateData = [
        advocate.firstName,
        advocate.lastName,
        advocate.city,
        advocate.degree,
        ...advocate.specialties,
        advocate.yearsOfExperience.toString(),
      ];

      return advocateData.some((data) => data.toLowerCase().includes(searchTerm));
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: "1px solid black" }} value={searchTerm} onChange={onChange} />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
