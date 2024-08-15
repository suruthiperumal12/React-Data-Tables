import { data } from "./Data";
import { useState } from "react";
import "./styles.css";
export default function Table() {
  const [searchId, setSearchId] = useState("");
  const [searchFirstname, setSearchFirstName] = useState("");
  const [searchLastname, setSearchLastName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchDob, setSearchDob] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  return (
    <div className="container">
      <h1>React Data Tables</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="text"
                placeholder="ID"
                onChange={(e) => setSearchId(e.target.value)}
                value={searchId}
              />
              ID
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                onChange={(e) => setSearchFirstName(e.target.value)}
                value={searchFirstname}
              />
              First Name
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setSearchLastName(e.target.value)}
                value={searchLastname}
              />
              Last Name
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                onChange={(e) => setSearchEmail(e.target.value)}
                value={searchEmail}
              />
              Email
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Date Of Birth"
                onChange={(e) => setSearchDob(e.target.value)}
                value={searchDob}
              />
              Date of Birth
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Country"
                onChange={(e) => setSearchCountry(e.target.value)}
                value={searchCountry}
              />
              Country
            </th>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                onChange={(e) => setSearchPhone(e.target.value)}
                value={searchPhone}
              />
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return (
                (searchId === "" ||
                  item.id.toString().includes(searchId.toLowerCase())) &&
                (searchFirstname === "" ||
                  item.first_name
                    .toLowerCase()
                    .includes(searchFirstname.toLowerCase())) &&
                (searchLastname === "" ||
                  item.last_name.toLowerCase().includes(searchLastname)) &&
                (searchEmail === "" ||
                  item.email.toLowerCase().includes(searchEmail)) &&
                (searchDob === "" ||
                  item.Date_of_birth.toLowerCase().includes(searchDob)) &&
                (searchCountry === "" ||
                  item.country.toLowerCase().includes(searchCountry)) &&
                (searchPhone === "" ||
                  item.phone.toLowerCase().includes(searchPhone))
              );
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td> {item.first_name}</td>
                <td> {item.last_name}</td>
                <td> {item.email}</td>
                <td>{item.Date_of_birth}</td>
                <td> {item.country}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
