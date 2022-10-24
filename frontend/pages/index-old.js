import { FaFacebookF, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginAPIResponse = await axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: {
        email: email,
        password: password,
      },
    });
    console.log("Submitted", loginAPIResponse);
    if (loginAPIResponse.status === 201) {
      localStorage.setItem("token", loginAPIResponse.data.token);
      // redirect to profile page
      router.push("/profilepage");
    } else {
      alert("Login Failed!, Something went wrong");
    }
    console.log("Token", localStorage.getItem("token"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
        {/*Company Logo Div*/}
        {/* <div className='flex p-3 m-3 '>
          Company Logo
        </div> */}

        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
          <div className="p-8">
            <div className="">
              <h2 className="font-bold text-blue-900 mb-5 text-4xl">
                Login in to Account
              </h2>
              <div className="bg-blue-900 border-2 w-4 border-blue-900 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="http://localhost:3000/auth/facebook"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-l text-blue-600" />
                </a>
                {/* <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-l text-red-600" />
                </a> */}
              </div>
              <p className="text-gray-400 my-3">
                or Sign-in with your email account
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-base flex-2"
                  />
                </div>
                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 outline-none text-base flex-2"
                  />
                </div>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                >
                  LOGIN
                </button>
                Need to create a new Account ?
                <a
                  href="/register"
                  className="text-blue-900 my-3 font-base font-bold"
                >
                  Register here !!
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
