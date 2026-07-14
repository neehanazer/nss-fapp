import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewVol = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/view-volunteer")
      .then((response) => {
        setVolunteers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching volunteer details:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View Volunteers</h1>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Volunteer ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Department</th>
                <th>Year of Study</th>
                <th>Camp Name</th>
                <th>Hours Completed</th>
                <th>Address</th>
                <th>Unit Number</th>
              </tr>
            </thead>

            <tbody>
              {volunteers.map((volunteer, index) => (
                <tr key={index}>
                  <td>{volunteer.volunteerid}</td>
                  <td>{volunteer.fullname}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.phone}</td>
                  <td>{volunteer.dateofbirth}</td>
                  <td>{volunteer.gender}</td>
                  <td>{volunteer.bloodgroup}</td>
                  <td>{volunteer.department}</td>
                  <td>{volunteer.yearofstudy}</td>
                  <td>{volunteer.campname}</td>
                  <td>{volunteer.hourscompleted}</td>
                  <td>{volunteer.address}</td>
                  <td>{volunteer.unitnumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewVol;