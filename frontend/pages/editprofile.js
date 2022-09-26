import { FaGoogle, FaFacebookF, FaEnvelope, FaLock } from 'react-icons/fa';
import Image from "next/image";

export default function EditProfile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
   
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
       
          <div className='p-8'>
            <div className=''>
              <h2 className='font-bold text-blue-900 mb-5 text-4xl'>
                Edit your profile details
              </h2>
              <div className='bg-blue-900 border-2 w-4 border-blue-900 inline-block mb-2'></div>
                  <div className='flex flex-col items-center'>

                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='changeProfileImage' placeholder='Change Photo URL' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='chnageUserName' placeholder='Change username' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='text' name='changeBio' placeholder='Change bio' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='email' name='changeEmail' placeholder='Change Email Address' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <a href="changePassword" className='text-blue-900 my-3 font-base font-bold'>Do you want to change password ? Change here !!</a>
                
                <a href="profilepage" className='border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white'>Update</a>

              </div>
            </div>
          </div>
          
      </main>

    </div>
  )
}