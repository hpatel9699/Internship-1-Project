import { FaGoogle, FaFacebookF, FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerAPIResponse = await axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      data: {
        email: email,
        name: name,
        password: password,
        phone: phone,
        bio: bio,
      },
    });
    console.log("Submitted", registerAPIResponse);
    if (registerAPIResponse.status === 201) {
      alert("Registration Completed!");
    } else {
      alert("Registration Failed!, Something went wrong");
    }
  };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
        <div className="p-8">
          <div className="">
            <h2 className="font-bold text-blue-900 mb-5 text-4xl">
              User Registration
            </h2>
            <h4>
              Already have an account?
              <br />
              <a href="/">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    padding: "20",
                  }}
                >
                  Login
                </button>
              </a>
            </h4>
            <div className="bg-blue-900 border-2 w-4 border-blue-900 inline-block mb-2"></div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 outline-none text-base flex-2"
                />
              </div>
              <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="Password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 outline-none text-base flex-2"
                />
              </div>
              <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 outline-none text-base flex-2"
                />
              </div>
              <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="Bio"
                  placeholder="Enter Bio"
                  onChange={(e) => setBio(e.target.value)}
                  className="bg-gray-100 outline-none text-base flex-2"
                />
              </div>
              <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="Phone number"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-100 outline-none text-base flex-2"
                />
              </div>
              <a
                href="index"
                className="text-blue-900 my-3 font-base font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                <button
                  style={{
                    backgroundColor: "#1E90FF",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Submit
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
