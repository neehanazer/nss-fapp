import React from "react";
import axios from "axios";
import NavBar from "./NavBar";

const AddVol = () => {
  const [data, setData] = React.useState({
    volunteerid: "",
    fullname: "",
    email: "",
    phone: "",
    dateofbirth: "",
    gender: "",
    bloodgroup: "",
    department: "",
    yearofstudy: "",
    campname: "",
    hourscompleted: "",
    address: "",
    unitnumber: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-volunteer", data)
      .then((res) => {
        alert("Volunteer Added Successfully");

        setData({
          volunteerid: "",
          fullname: "",
          email: "",
          phone: "",
          dateofbirth: "",
          gender: "",
          bloodgroup: "",
          department: "",
          yearofstudy: "",
          campname: "",
          hourscompleted: "",
          address: "",
          unitnumber: "",
        });
      })
      .catch((err) => {
        alert("Error Adding Volunteer");
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h2 style={{ marginBottom: 40 }}>Add Volunteer</h2>

        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Volunteer ID</label>
            <input
              type="text"
              className="form-control"
              name="volunteerid"
              value={data.volunteerid}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dateofbirth"
              value={data.dateofbirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={data.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Blood Group</label>
            <select
              className="form-select"
              name="bloodgroup"
              value={data.bloodgroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              value={data.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Year of Study</label>
            <input
              type="text"
              className="form-control"
              name="yearofstudy"
              value={data.yearofstudy}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Camp Name</label>
            <input
              type="text"
              className="form-control"
              name="campname"
              value={data.campname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Hours Completed</label>
            <input
              type="number"
              className="form-control"
              name="hourscompleted"
              value={data.hourscompleted}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="2"
              value={data.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label">Unit Number</label>
            <input
              type="text"
              className="form-control"
              name="unitnumber"
              value={data.unitnumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddVol;