import { FaLock } from "react-icons/fa";

export default function ChangePassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
          <div className="p-8">
            <div className="">
              <h2 className="font-bold text-blue-900 mb-5 text-4xl">
                Change Password
              </h2>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Current Password"
                    className="bg-gray-100 outline-none text-base flex-2"
                  />
                </div>
                <div className="bg-gray-100 w-72 p-3 flex items-center mb-3">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="bg-gray-100 outline-none text-base flex-2"
                  />
                </div>

                <a
                  href="#"
                  className="border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
