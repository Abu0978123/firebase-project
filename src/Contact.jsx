import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const [User, setUser] = useState({
    namee: "",
    email: "",
    address: "",
    phone: "",
  });
  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...User, [name]: value });
  };
  const { namee, email, address, phone } = User;
  const postData = async (e) => {
    e.preventDefault();
    if (namee && email && address && phone) {
      await axios
        .post(
          `https://first-firebase-project-6cdc0-default-rtdb.firebaseio.com/firstform.json`,
          { namee, email, phone, address }
        )
        .then((res) => {
          console.log(res);
          alert("data been successfully");
        })
        .catch((error) => {
          console.log(`getting error`, error);
          alert("not working ");
        });
    } else {
      alert("all field are mandatory");
    }
  };
  useEffect(()=>{
    AOS.init();
  },[])
  //https://console.firebase.google.com/u/0/project/first-firebase-project-6cdc0/database/first-firebase-project-6cdc0-default-rtdb/data/~2Ffirstform
  return (
    <div>
      <div className="container ">
        <div className="row m-md-5  p-5">
          <div className="col-md-8 rounded-5 m-auto shadow p-5 " data-aos="flip-down" data-aos-duration="2000" >
            <h3 className="pb-3 text-center text-capitalize">Passing Data to Fire Base</h3>
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={User.name}
                  onChange={getData}
                  required
                  autoComplete="off"
                  name="namee"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={User.name}
                  onChange={getData}
                  required
                  autoComplete="off"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter your Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={User.name}
                  onChange={getData}
                  required
                  autoComplete="off"
                  name="address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={User.name}
                  onChange={getData}
                  required
                  autoComplete="off"
                  name="phone"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={postData}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
