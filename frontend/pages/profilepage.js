import { FaGoogle, FaFacebookF, FaEnvelope, FaLock } from 'react-icons/fa';
import Image from "next/image";

export default function profilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
   
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
          <div className='p-8'>
            <div className=''>
              <h2 className='font-bold text-blue-900 mb-5 text-4xl'>
                Profile Details
              </h2>
              <div className='bg-blue-900 border-2 w-4 border-blue-900 inline-block mb-2'></div>
              <div className='flex flex-col items-center'>

                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='profileImage' placeholder='Photo URL' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='userName' placeholder='username' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='bio' placeholder='bio' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='email' name='email' placeholder='Email Address' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='password' name='password' placeholder='Your current Password' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <a href="editprofile" className='border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white'>Update Your Profile</a>
                <a href=".." className='border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 my-3 inline-block font-semibold hover:bg-blue-900 hover:text-white'>SignOut</a>
              </div>
            </div>
          </div>
      </main>

    </div>
  )
}